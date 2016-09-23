// Based on this SO response: http://stackoverflow.com/a/8781262
// Unfortunately, `GM_xmlhttpRequest()` does not (yet) support setting `responseType`.

(function(global) {
    'use strict';

    function customBase64Encode(inputStr) {
        var
            bbLen = 3,
            enCharLen = 4,
            inpLen = inputStr.length,
            inx = 0,
            jnx,
            keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" +
            "0123456789+/=",
            output = "",
            paddingBytes = 0;
        var
            bytebuffer = new Array(bbLen),
            encodedCharIndexes = new Array(enCharLen);

        while (inx < inpLen) {
            for (jnx = 0; jnx < bbLen; ++jnx) {
                /*--- Throw away high-order byte, as documented at:
                  https://developer.mozilla.org/En/Using_XMLHttpRequest#Handling_binary_data
                */
                if (inx < inpLen)
                    bytebuffer[jnx] = inputStr.charCodeAt(inx++) & 0xff;
                else
                    bytebuffer[jnx] = 0;
            }

            /*--- Get each encoded character, 6 bits at a time.
                index 0: first  6 bits
                index 1: second 6 bits
                            (2 least significant bits from inputStr byte 1
                             + 4 most significant bits from byte 2)
                index 2: third  6 bits
                            (4 least significant bits from inputStr byte 2
                             + 2 most significant bits from byte 3)
                index 3: forth  6 bits (6 least significant bits from inputStr byte 3)
            */
            encodedCharIndexes[0] = bytebuffer[0] >> 2;
            encodedCharIndexes[1] = ((bytebuffer[0] & 0x3) << 4) | (bytebuffer[1] >> 4);
            encodedCharIndexes[2] = ((bytebuffer[1] & 0x0f) << 2) | (bytebuffer[2] >> 6);
            encodedCharIndexes[3] = bytebuffer[2] & 0x3f;

            //--- Determine whether padding happened, and adjust accordingly.
            paddingBytes = inx - (inpLen - 1);
            switch (paddingBytes) {
                case 1:
                    // Set last character to padding char
                    encodedCharIndexes[3] = 64;
                    break;
                case 2:
                    // Set last 2 characters to padding char
                    encodedCharIndexes[3] = 64;
                    encodedCharIndexes[2] = 64;
                    break;
                default:
                    break; // No padding - proceed
            }

            /*--- Now grab each appropriate character out of our keystring,
                based on our index array and append it to the output string.
            */
            for (jnx = 0; jnx < enCharLen; ++jnx)
                output += keyStr.charAt(encodedCharIndexes[jnx]);
        }
        return output;
    }

    global.GM_fetchBlob = (blobUrl, mimetype) => {
        return new Promise((resolve, reject) => {
            GM_xmlhttpRequest({
                method: 'GET',
                url: blobUrl,
                onload: (respDetails) => {
                    return resolve(`data:${mimetype};base64,${customBase64Encode(respDetails.responseText)}`);
                },
                onerror: () => {
                    return reject(...arguments);
                },
                overrideMimeType: 'text/plain; charset=x-user-defined'
            });
        });
    };

}(this));
