const axios = require('axios')
const fs=require("fs")
const { fetchJson, cmd, citel, Config, tlang } = require('../lib')

//========================================================================================//

cmd({

            pattern: "apk",

            desc: "apk down",

            react: "🗃️",

            category: "downloader"

        },

        async(Void, citel, text) => {

            if (!text) return

apkdl = await axios.get(`https://darkalphaxteam-official-api.cyclic.app/api/download/apk?packagename=${text}&apikey=prabath`)
citel.reply (`*Hello ${citel.pushName} I Am Finding Your Apk*`);
const applink = apkdl.data.result.dllink
const getname = apkdl.data.result.name
const lastupdate = apkdl.data.result.lastup

       return Void.sendMessage(citel.chat, {

                document: {

                    url: applink ,

                },

                mimetype: "application/vnd.android.package-archive",
                caption: tlang().footer,

                fileName: getname ,

            }, {

                quoted: citel,

            });

        }

    )

//========================================================================================//

cmd({

            pattern: "hirunews",

            desc: "Hiru Tv News",

            react: "️🗞️",

            category: "search"

        },

        async(Void, citel, text) => {

            if (!text) return

hirunews = await axios.get(`https://api.sdbots.tk/hirunews`)

       return Void.sendMessage(citel.chat, {

                document: {

                    url: hirunews.data.img ,

                },

                mimetype: "application/vnd.android.package-archive",
                caption: "*ᴛɪᴛʟᴇ :* ${hirunews.data.title}\n\n*ᴅᴀᴛᴇ :* ${hirunews.data.date}\n\n*ʟɪɴᴋ :* ${hirunews.data.link}\n\n*ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ :* ${hirunews.data.description}\n\n*ᴅᴀʀᴋ ᴀɴɢᴇʟ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ*",


            }, {

                quoted: citel,

            });

        }

    )
    
//========================================================================================//