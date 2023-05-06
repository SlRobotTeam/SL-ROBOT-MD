/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Secktor-Md
 * @author : SamPandey001 <https://github.com/SamPandey001>
 * @description : Secktor,A Multi-functional whatsapp bot.
 * @version 0.0.6
 **/

const { tlang, ringtone, cmd,fetchJson, sleep, botpic, getBuffer, pinterest, prefix, Config } = require('../lib')
const { mediafire } = require("../lib/mediafire.js");
const googleTTS = require("google-tts-api");
const ytdl = require('ytdl-secktor')
const fs = require('fs')
var videotime = 60000 // 10000min
var dlsize = 350 // 350mb
    //---------------------------------------------------------------------------
cmd({
            pattern: "tts",
            react: "🔊",
            desc: "text to speech.",
            category: "downloader",
            filename: __filename,
            use: '<Hii,this is Secktor>',
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply('Please give me Sentence to change into audio.')
            let texttts = text
            citel.react("📢");
            const ttsurl = googleTTS.getAudioUrl(texttts, {
                lang: "si",
                slow: false,
                host: "https://translate.google.com",
            });
            return Void.sendMessage(citel.chat, {
                audio: {
                    url: ttsurl,
                },
                mimetype: "audio/mpeg",
                fileName: `ttsCitelVoid.m4a`,
            }, {
                quoted: citel,
            });
        }

    )
    
    //---------------------------------------------------------------------------
cmd({
            pattern: "ringtone",
            desc: "Downloads ringtone.",
            category: "downloader",
            filename: __filename,
            use: '<ringtone name>',
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply(`Example: ${prefix}ringtone back in black`)
            let anu = await ringtone(text)
            let result = anu[Math.floor(Math.random() * anu.length)]
            return Void.sendMessage(citel.chat, { audio: { url: result.audio }, fileName: result.title + '.mp3', mimetype: 'audio/mpeg' }, { quoted: citel })
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "pint",
            desc: "Downloads image from pinterest.",
            category: "downloader",
            filename: __filename,
            use: '<text|image name>',
        },
        async(Void, citel, text) => {
            if (!text) return reply("What picture are you looking for?") && Void.sendMessage(citel.chat, {
                react: {
                    text: '❌',
                    key: citel.key
                }
            })
            try {
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [{
                        buttonId: `${prefix}pint ${text}`,
                        buttonText: {
                            displayText: 'Next Image ➡️'
                        },
                        type: 1
                    }

                ]
                let buttonMessage = {
                    image: {
                        url: result
                    },
                    caption: ` `,
                    footer: tlang().footer,
                    buttons: buttons,
                    headerType: 4,                    
                    }
                return Void.sendMessage(citel.chat, buttonMessage, {
                    quoted: citel
                })
            } catch (e) {
                console.log(e)
            }
        })
    //---------------------------------------------------------------------------
cmd({
            pattern: "mediafire",
            alias: ["mf","මීඩියාෆයර්","mfire"],
            desc: "Downloads zip from Mediafire.",
            category: "downloader",
            react: "⬇️",
            filename: __filename,
            use: '<url of mediafire>',
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply(`Give link ${tlang().greet}`);
            if (!isUrl(text.split(" ")[0]) && !text.split(" ")[0].includes("mediafire.com")) return reply(`The link you provided is invalid`);
            const baby1 = await mediafire(text);
            if (baby1[0].size.split("MB")[0] >= 999) return reply("*File Over Limit* " + util.format(baby1));
            const result4 = `*Mᴇᴅɪᴀғɪʀᴇ Dᴏᴡɴʟᴏᴀᴅᴇʀ*
*Nᴀᴍᴇ* : ${baby1[0].nama}
*Sɪᴢᴇ* : ${baby1[0].size}
*Mɪᴍᴇ* : ${baby1[0].mime}
*Lɪɴᴋ* : ${baby1[0].link}`;
            reply(`${result4}`);
            return Void.sendMessage(citel.chat, {
                    document: {
                        url: baby1[0].link,
                    },
                    fileName: baby1[0].nama,
                    mimetype: baby1[0].mime,
                }, {
                    quoted: citel,
                })
                .catch((err) => reply("could not found anything"));

        }
    )

   //-------------------------------------------------------------------------
cmd({
            pattern: "yts",
            alias: ["සොයන්න","yt"],
            desc: "Gives descriptive info of query from youtube..",
            category: "downloader",
            filename: __filename,
            use: '<yt search text>',
        },
        async(Void, citel, text) => {
            let yts = require("secktor-pack");
            citel.reply("*Searching on YouTube* 🌎");
            if (!text) return citel.reply(`*Enter the search word* ❗`);
            let search = await yts(text);
            let textt = "*YouTube Search*\n\n Result From " + text + "\n\n━━━━━━━━━━━━━━━━━━━━━━━\n";

            let no = 1;

            for (let i of search.all) {

                textt += `🌐 No : ${no++}\n\n ℹ️Title : ${i.title}\n♫ Type : ${

          i.type

        }\n👀Views : ${i.views}\n🕑Duration : ${

          i.timestamp

        }\n⬆️Upload At : ${i.ago}\n💬Author : ${i.author.name}\n🎊Url : ${

          i.url

        }\n\n━━━━━━━━━━━━━━━━━━━━━━━\n\n`;

            }

            return Void.sendMessage(citel.chat, {

                image: {

                    url: search.all[0].thumbnail,

                },

                caption: textt,

            }, {

                quoted: citel,

            });

        }

    )

    //---------------------------------------------------------------------------
cmd({
        pattern: "song",
        desc: "Downloads audio by yt link.",
        category: "downloader",
        react: "🎶",
        use: '<yt video url>',
    },
    async(Void, citel, text) => {
        let yts = require("secktor-pack");

            let search = await yts(text);

            let anu = search.videos[0];
        const getRandom = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`;
        };

        if (text.length === 0) {
            reply(`❌ URL is empty! \nSend ${prefix}ytmp3 url`);
            return;
        }
        try {
            let urlYt = text;
            if (!urlYt.startsWith("")) {
                citel.reply(`*Give Song Name!*❗`);
                return;
            }
            let infoYt = await ytdl.getInfo(anu.url);
            //30 MIN
            if (infoYt.videoDetails.lengthSeconds >= videotime) return citel.reply(`*The limit has been exceeded.*❗`);
            let titleYt = infoYt.videoDetails.title;
            let randomName = getRandom(".mp3");
            const stream = ytdl(anu.url, {
                    filter: (info) => info.audioBitrate == 160 || info.audioBitrate == 128,
                })
                .pipe(fs.createWriteStream(`./${randomName}`));
            await new Promise((resolve, reject) => {
                stream.on("error", reject);
                stream.on("finish", resolve);
            });

            let stats = fs.statSync(`./${randomName}`);
            let fileSizeInBytes = stats.size;
            let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
            if (fileSizeInMegabytes <= dlsize) {
                let yts = require("secktor-pack");
            citel.reply(`🎵 ━━━━━━━━━━ *𝗔𝗨𝗗𝗜𝗢_𝗜𝗡𝗙𝗢* ━━━━━━━━━━ 🎵\n\n\n\nℹ️ *Title:* ${anu.title}\n\n🕑 *Duration:* ${anu.timestamp}\n\n👀 *Viewers:* ${anu.views}\n\n⬆️ *Uploaded:* ${anu.ago}\n\n🎗️ *Author:* ${anu.author.name}\n\n🗃️ *File_Size:* ${fileSizeInMegabytes} MB`);
                let search = await yts(text);
            citel.react("✅");
                let buttonMessage = {
                        audio: fs.readFileSync(`./${randomName}`),
                        jpegThumbnail: log0,
                        mimetype: 'audio/mp4',
                        fileName: `${titleYt}.mp4`,
                        caption: `★彡[𝙳𝚁𝙰𝙺 𝙽𝙴𝚁𝙾 ⦁ 𝙼𝙰𝙳𝙴 𝙱𝚈 𝙺𝙰𝚅𝙴𝙴𝚂𝙷𝙰 ⦁ 2023/05/01]彡★`,
                        headerType: 4,
                    }
                    return Void.sendMessage(citel.chat, buttonMessage, { quoted: citel })
                } else {
                    citel.reply(`*The limit has been exceeded.*❗`);
                }

                fs.unlinkSync(`./${randomName}`);
            } catch (e) {
                console.log(e)
            }
        }
    )

  //---------------------------------------------------------------------------


//---------------------------------------------------------------------------
cmd({

        pattern: "testvideo",

        desc: "Downloads audio by yt link.",

        category: "downloader",

        react: "📽️",

        use: '<yt video url>',

    },

    async(Void, citel, text) => {

        let yts = require("secktor-pack");

            let search = await yts(text);

            let anu = search.videos[0];

        const getRandom = (ext) => {

            return `${Math.floor(Math.random() * 10000)}${ext}`;

        };

        if (text.length === 0) {

            reply(`❌ URL is empty! \nSend ${prefix}ytmp3 url`);

            return;

        }

        try {

            let urlYt = text;

            if (!urlYt.startsWith("")) {

                citel.reply(`*Give Video Name!*❗`);

                return;

            }

            let infoYt = await ytdl.getInfo(anu.url);

            //30 MIN

            if (infoYt.videoDetails.lengthSeconds >= videotime) return citel.reply(`*The limit has been exceeded.*❗`);

            let titleYt = infoYt.videoDetails.title;

            let randomName = getRandom(".mp3");

            const stream = ytdl(anu.url, {

                    filter: (info) => info.audioBitrate == 160 || info.audioBitrate == 128,

                })

                .pipe(fs.createWriteStream(`./${randomName}`));

            await new Promise((resolve, reject) => {

                stream.on("error", reject);

                stream.on("finish", resolve);

            });

            let stats = fs.statSync(`./${randomName}`);

            let fileSizeInBytes = stats.size;

            let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);

            if (fileSizeInMegabytes <= dlsize) {

                let yts = require("secktor-pack");

            citel.reply(`📽️ ━━━━━━━━━━ *𝗩𝗜𝗗𝗘𝗢_𝗜𝗡𝗙𝗢* ━━━━━━━━━━ 📽️\n\n\n\nℹ️ *Title:* ${anu.title}\n\n🕑 *Duration:* ${anu.timestamp}\n\n👀 *Viewers:* ${anu.views}\n\n⬆️ *Uploaded:* ${anu.ago}\n\n🎗️ *Author:* ${anu.author.name}\n\n🗃️ *File_Size:* ${fileSizeInMegabytes} MB`);

                let search = await yts(text);

            citel.react("✅");

                let buttonMessage = {

                        video: fs.readFileSync(`./${randomName}`),

                        jpegThumbnail: log0,

                        mimetype: 'video/mp4',

                        fileName: `${titleYt}.mp4`,

                        caption: `𝙳𝙰𝚁𝙺 𝙽𝙴𝚁𝙾 ⦁ 𝙼𝙰𝙳𝙴 𝙱𝚈 𝙽𝙸𝙼𝙴𝚂𝙷\nʀᴇʟᴇᴀsᴇᴅ ⦁ 𝟸𝟶𝟸𝟹/𝟶𝟷/𝟶𝟸`,

                        headerType: 4,

                    }

                    return Void.sendMessage(citel.chat, buttonMessage, { quoted: citel })

                } else {

                    citel.reply(`*The limit has been exceeded.*❗`);

                }

                fs.unlinkSync(`./${randomName}`);

            } catch (e) {

                console.log(e)

            }

        }

    )

  //---------------------------------------------------------------------------

cmd({

        pattern: "docsong",

        alias: ["document song"],

        desc: "Downloads audio by yt link.",

        category: "downloader",

        react: "📂",

        use: '<yt video url>',

    },

    async(Void, citel, text) => {

        let yts = require("secktor-pack");

            let search = await yts(text);

            let anu = search.videos[0];

        const getRandom = (ext) => {

            return `${Math.floor(Math.random() * 10000)}${ext}`;

        };

        if (text.length === 0) {

            reply(`❌ URL is empty! \nSend ${prefix}ytmp3 url`);

            return;

        }

        try {

            let urlYt = text;

            if (!urlYt.startsWith("")) {

                citel.reply(`*Give Song Name!*❗`);

                return;

            }

            let infoYt = await ytdl.getInfo(anu.url);

            //30 MIN

            if (infoYt.videoDetails.lengthSeconds >= videotime) return citel.reply(`*The limit has been exceeded.*❗`);

            let titleYt = infoYt.videoDetails.title;

            let randomName = getRandom(".mp3");

            const stream = ytdl(anu.url, {

                    filter: (info) => info.audioBitrate == 160 || info.audioBitrate == 128,

                })

                .pipe(fs.createWriteStream(`./${randomName}`));

            await new Promise((resolve, reject) => {

                stream.on("error", reject);

                stream.on("finish", resolve);

            });

            let stats = fs.statSync(`./${randomName}`);

            let fileSizeInBytes = stats.size;

            let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);

            if (fileSizeInMegabytes <= dlsize) {

                let yts = require("secktor-pack");

            citel.reply(`📂 ━━━━━━━━━ *𝗗𝗢𝗖𝗨𝗠𝗘𝗡𝗧_𝗜𝗡𝗙𝗢* ━━━━━━━━━ 🎵\n\n\n\nℹ️ *Title:* ${anu.title}\n\n🕑 *Duration:* ${anu.timestamp}\n\n👀 *Viewers:* ${anu.views}\n\n⬆️ *Uploaded:* ${anu.ago}\n\n🎗️ *Author:* ${anu.author.name}\n\n🗃️ *File_Size:* ${fileSizeInMegabytes} MB`);

                let search = await yts(text);

            citel.react("✅");

                let buttonMessage = {

                        document: fs.readFileSync(`./${randomName}`),

                        jpegThumbnail: log0,

                        mimetype: 'audio/mp4',

                        fileName: `${titleYt}.mp3`,

                        caption: `★彡[ᴘᴀꜱɪɴᴅᴜ-ᴍᴅ ⦁ ᴍᴀᴅᴇ ʙʏ ᴘᴀꜱɪɴᴅᴜɴʀᴇʟᴇᴀꜱᴇᴅ ⦁ 2023/05/01]彡★`,

                        headerType: 4,

                    }

                    return Void.sendMessage(citel.chat, buttonMessage, { quoted: citel })

                } else {

                    citel.reply(`*The limit has been exceeded.*❗`);

                }

                fs.unlinkSync(`./${randomName}`);

            } catch (e) {

                console.log(e)

            }

        }

    )

  //---------------------------------------------------------------------------

cmd({

        pattern: "docvideo",

        alias: ["document song"],

        desc: "Downloads audio by yt link.",

        category: "downloader",

        react: "📂",

        use: '<yt video url>',

    },

    async(Void, citel, text) => {

        let yts = require("secktor-pack");

            let search = await yts(text);

            let anu = search.videos[0];

        const getRandom = (ext) => {

            return `${Math.floor(Math.random() * 10000)}${ext}`;

        };

        if (text.length === 0) {

            reply(`❌ URL is empty! \nSend ${prefix}ytmp3 url`);

            return;

        }

        try {

            let urlYt = text;

            if (!urlYt.startsWith("")) {

                citel.reply(`*Give Video Name!*❗`);

                return;

            }

            let infoYt = await ytdl.getInfo(anu.url);

            //30 MIN

            if (infoYt.videoDetails.lengthSeconds >= videotime) return citel.reply(`*The limit has been exceeded.*❗`);

            let titleYt = infoYt.videoDetails.title;

            let randomName = getRandom(".mp3");

            const stream = ytdl(anu.url, {

                    filter: (info) => info.audioBitrate == 160 || info.audioBitrate == 128,

                })

                .pipe(fs.createWriteStream(`./${randomName}`));

            await new Promise((resolve, reject) => {

                stream.on("error", reject);

                stream.on("finish", resolve);

            });

            let stats = fs.statSync(`./${randomName}`);

            let fileSizeInBytes = stats.size;

            let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);

            if (fileSizeInMegabytes <= dlsize) {

                let yts = require("secktor-pack");

            citel.reply(`📂 ━━━━━━━━━ *𝗗𝗢𝗖𝗨𝗠𝗘𝗡𝗧_𝗜𝗡𝗙𝗢* ━━━━━━━━━ 📽️\n\n\n\nℹ️ *Title:* ${anu.title}\n\n🕑 *Duration:* ${anu.timestamp}\n\n👀 *Viewers:* ${anu.views}\n\n⬆️ *Uploaded:* ${anu.ago}\n\n🎗️ *Author:* ${anu.author.name}\n\n🗃️ *File_Size:* ${fileSizeInMegabytes} MB`);

                let search = await yts(text);

            citel.react("✅");

                let buttonMessage = {

                        document: fs.readFileSync(`./${randomName}`),

                        jpegThumbnail: log0,

                        mimetype: 'video/mp4',

                        fileName: `${titleYt}.mp4`,

                        caption: `★彡[ᴘᴀꜱɪɴᴅᴜ-ᴍᴅ ⦁ ᴍᴀᴅᴇ ʙʏ ᴘᴀꜱɪɴᴅᴜɴʀᴇʟᴇᴀꜱᴇᴅ ⦁ 2023/05/01]彡★`,

                        headerType: 4,

                    }

                    return Void.sendMessage(citel.chat, buttonMessage, { quoted: citel })

                } else {

                    citel.reply(`*The limit has been exceeded.*❗`);

                }

                fs.unlinkSync(`./${randomName}`);

            } catch (e) {

                console.log(e)

            }

        }

    )
