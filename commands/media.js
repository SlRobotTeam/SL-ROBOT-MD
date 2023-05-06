const { fetchJson, cmd, citel, Config, tlang } = require('../lib')

cmd({

            pattern: "apk",

            desc: "apk down",

            react: "🗃️",

            category: "downloader"

        },

        async(Void, citel, text) => {

            if (!text) return

const apkdl = await fetchJson(`https://darkalphaxteam-official-api.cyclic.app/api/download/apk?packagename=${text}&apikey=prabath`)
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