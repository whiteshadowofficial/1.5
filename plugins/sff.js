/* # Exclusively from ◇─◇◇────◇─ ✿  ᗪ𝓪Ⓣ𝓪 𝐋σ𝓥εŘ  ✿═─◄█▓▒░

*/

const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const need = "*type some word after command*\n*command එකට පස්සේ වචනයක් ලියන්න ඕන"

if (Config.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'sff ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.zeks.xyz/api/epep?apikey=cjxJIn9eDletRHac3CG6CdvGxFH&text=${encodeURIComponent(match[1])}&text2=dataloverbot`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Made by ◇─◇◇────◇─ ✿  ᗪ𝓪Ⓣ𝓪 𝐋σ𝓥εŘ  ✿═─◄█▓▒░' })

    }));
}

else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({ pattern: 'sff ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.zeks.xyz/api/epep?apikey=cjxJIn9eDletRHac3CG6CdvGxFH&text=${encodeURIComponent(match[1])}&text2=dataloverbot`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Made by ◇─◇◇────◇─ ✿  ᗪ𝓪Ⓣ𝓪 𝐋σ𝓥εŘ  ✿═─◄█▓▒░' })

    }));
    
}
