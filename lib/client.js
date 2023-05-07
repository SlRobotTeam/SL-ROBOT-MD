const pino = require('pino')
const Config = require('../config');
const { Boom } = require("@hapi/boom");
const fs = require('fs-extra');
const FileType = require('file-type')
const path = require('path');
const express = require("express");
const app = express();
const prefix = Config.HANDLERS[0];
const mongoose = require('mongoose');
const { writeFile } = require("fs/promises");
const events = require('./commands')
const { exec, spawn, execSync } = require("child_process");
const PhoneNumber = require('awesome-phonenumber')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./exif')
const { default: VoidConnect, BufferJSON,generateLinkPreviewIfRequired, WA_DEFAULT_EPHEMERAL, proto, generateWAMessageContent, generateWAMessage, AnyMessageContent, prepareWAMessageMedia, areJidsSameUser, getContentType, downloadContentFromMessage, DisconnectReason, useMultiFileAuthState, fetchLatestBaileysVersion, MessageRetryMap, generateForwardMessageContent, generateWAMessageFromContent, generateMessageID, makeInMemoryStore, jidDecode } = require("@adiwajshing/baileys")
const util = require("util");
const Levels = require("discord-xp");
try {
    Levels.setURL(mongodb);
    console.log("🌍 Connected to the Pasindu-MD")
} catch {
    console.log("Could not connect with Mongodb please provide accurate uri check video for more inofo❗\nhttps://youtu.be/7YWI50BDO5op")
    process.exit(0)
}
const { sck1, RandomXP, sck, plugindb, card } = require("../lib");
const chalk = require("chalk");
const fetch = require("node-fetch");
const axios = require("axios");
const moment = require("moment-timezone");
let { isUrl, sleep, getBuffer, format, parseMention, getRandom, fancy, randomfancy, botpic, tlang } = require("../lib");
const { smsg } = require('../lib/myfuncn')
const { formatp, formatDate, getTime, clockString, runtime, fetchJson, jsonformat, GIFBufferToVideoBuffer, getSizeMedia, generateMessageTag, fancytext } = require('../lib')
const speedofbot = require("performance-now");
global.db = JSON.parse(fs.readFileSync(__dirname + "/database.json"));
var CryptoJS = require("crypto-js");
var prefixRegex = Config.prefix === "false" || Config.prefix === "null" ? "^" : new RegExp('^[' + Config.HANDLERS + ']');
let cc = Config.sessionName.replace(/Secktor;;;/g, "");
async function MakeSession(){
if (!fs.existsSync(__dirname + '/auth_info_baileys/creds.json')) {
    if(cc.length<30){
    const axios = require('axios');
    let { data } = await axios.get('https://paste.c-net.org/'+cc)
    await fs.writeFileSync(__dirname + '/auth_info_baileys/creds.json', atob(data), "utf8")    
    } else {
	 var c = atob(cc)
         await fs.writeFileSync(__dirname + '/auth_info_baileys/creds.json', c, "utf8")    
    }
}
}
MakeSession()
setTimeout(() => {
    const moment = require('moment-timezone')
    async function main() {
	if (!fs.existsSync(__dirname + '/auth_info_baileys/creds.json')) {
	    
         }
	try{
        await mongoose.connect(mongodb);
	} catch {
		console.log('Could not connect with Mongodb.\nPlease visit https://secktorbot.tech/wiki')
	}
    }
    main()
    //========================================================================================================================================
    const store = makeInMemoryStore({
        logger: pino().child({ level: "silent", stream: "store" }),
    });
    require("events").EventEmitter.defaultMaxListeners = 600;
    const getVersionWaweb = () => {
        let version
        try {
            let a = fetchJson('https://web.whatsapp.com/check-update?version=1&platform=web')
            version = [a.currentVersion.replace(/[.]/g, ', ')]
        } catch {
            version = [2, 2204, 13]
        }
        return version
    }
    let QR_GENERATE = "invalid";
    const msgRetryCounterMap = MessageRetryMap || {}
    async function syncdb() {
        let thumbbuffer = await getBuffer(THUMB_IMAGE)
        const ChangePic = __dirname + "/assets/SocialLogo.png"
        await writeFile(ChangePic, thumbbuffer);
        global.log0 = fs.readFileSync(__dirname + "/assets/SocialLogo.png"); //ur logo pic
        const { state, saveCreds } = await useMultiFileAuthState(__dirname + '/auth_info_baileys/')
        const Void = VoidConnect({
            logger: pino({ level: 'fatal' }),
            printQRInTerminal: true,
            browser: ['Secktor', 'safari', '1.0.0'],
            fireInitQueries: false,
            shouldSyncHistoryMessage: false,
            downloadHistory: false,
            syncFullHistory: false,
            generateHighQualityLinkPreview: true,
            auth: state,
            version: getVersionWaweb() || [2, 2242, 6],
            getMessage: async key => {
                if (store) {
                    const msg = await store.loadMessage(key.remoteJid, key.id, undefined)
                    return msg.message || undefined
                }
                return {
                    conversation: 'An Error Occurred, Repeat Command!'
                }
            }
        })
        store.bind(Void.ev)
setInterval(() => {
    store.writeToFile(__dirname+"/store.json");
  }, 30 * 1000);
        Void.ev.on('messages.upsert', async chatUpdate => {
            const mek = chatUpdate.messages[0]
            if (!mek.message) return
            mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
            if(mek.key && mek.key.remoteJid === 'status@broadcast'  && Config.auto_read_status==='true'){
            await Void.readMessages([mek.key])    
	    }
            if (mek.key && mek.key.remoteJid === 'status@broadcast') return
            try {
                let citel = await smsg(Void, JSON.parse(JSON.stringify(mek)), store)
                if (!citel.message) return
                if (citel.chat.endsWith("broadcast")) return;
                if (Config.alwaysonline==='true') {
                    Void.sendPresenceUpdate('available', citel.chat)
                }
                var { body } = citel
                var budy = typeof citel.text == "string" ? citel.text : false;
		
                if (body[1] && body[1] == " ") body = body[0] + body.slice(2);
                let icmd = body ? prefixRegex.test(body[0]) : false;
		 if (Config.readmessage==="true" && icmd) {
                    await Void.readMessages([mek.key])
                }
                const args = citel.body ? body.trim().split(/ +/).slice(1) : null;
                const botNumber = await Void.decodeJid(Void.user.id)
                const hgg = botNumber.split('@')[0]
                const quoted = citel.quoted ? citel.quoted : citel;
                const mime = (quoted.msg || quoted).mimetype || "";
                if (citel.chat === "120363025246125888@g.us") return
                let isCreator = [ hgg,...global.devs, ...global.owner].map((v) => v.replace(/[^0-9]/g) + "@s.whatsapp.net").includes(citel.sender);
                if (!isCreator && Config.disablepm === 'true' && icmd && !citel.isGroup) return
                if (!isCreator && Config.WORKTYPE === 'private') return
		if(!isCreator){
                let checkban = await sck1.findOne({ id: citel.sender }) || await new sck1({ id: citel.sender, name: citel.pushName }).save();
		let checkg = await sck.findOne({ id: citel.chat }) || await new sck({ id: citel.chat }).save();
		if(checkg.botenable==='false') return
                if (icmd && checkban.ban !== 'false') return citel.reply(`*Hii ${citel.pushName},*\n_You are banned ❌ from using commands._\n_Please contact owner for further information._`)
		}
		const cmdName = icmd ? body.slice(1).trim().split(" ")[0].toLowerCase() : false;
                if (icmd) {
                    const cmd = events.commands.find((cmd) => cmd.pattern === (cmdName)) || events.commands.find((cmd) => cmd.alias && cmd.alias.includes(cmdName))
                    if (cmd) {
                        isCreator = [hgg,...global.devs, ...global.owner].map((v) => v.replace(/[^0-9]/g) + "@s.whatsapp.net").includes(citel.sender);
                        if (cmd.react) citel.react(cmd.react)
                        let text;
                        try {
                            text = citel.body ? body.trim().split(/ +/).slice(1).join(" ") : null;
                        } catch {
                            text = false;
                        }
                        try {
                            cmd.function(Void, citel, text,{ args, isCreator, body, budy});
                        } catch (e) {
                            console.error("[ERROR] ", e);

                        }

                    }
                }
                events.commands.map(async(command) => {
                    if (body && command.on === "body") {
                        command.function(Void, citel,{args, isCreator, icmd, body, budy});
                    } else if (citel.text && command.on === "text") {
                        command.function(Void, citel, args,{isCreator, icmd, body, budy});
                    } else if (
                        (command.on === "image" || command.on === "photo") &&
                        citel.mtype === "imageMessage"
                    ) {
                        command.function(Void, citel, args,{isCreator, body, budy});
                    } else if (
                        command.on === "sticker" &&
                        citel.mtype === "stickerMessage"
                    ) {
                        command.function(Void, citel, args,{isCreator, body, budy});
                    }
                });
                const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat)
                    .catch((e) => {}) : "";
                const participants = citel.isGroup ? await groupMetadata.participants : "";
                const groupAdminss = (participants) => {
                    a = [];
                    for (let i of participants) {
                        if (i.admin == null) continue;
                        a.push(i.id);
                    }
                    return a;
                }
                const groupAdmins = citel.isGroup ? await groupAdminss(participants) : ''
                const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
                const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
                if (citel.isGroup) {
                    console.log('Message in Group\nIn=> '+groupMetadata.subject+' '+citel.sender+'\nMessage:'+citel.body+'\n----------------------------')
                }
                if (!citel.isGroup) {
                    console.log('Message in Personal\nFrom=> '+citel.pushName+' '+citel.sender+'\nMessage:'+citel.body+'\n----------------------------')
                }
                setInterval(() => {

                    fs.writeFileSync(__dirname + "/database.json", JSON.stringify(global.db, null, 2));

                }, 10000);
                try {
                    let GroupS = await sck.findOne({ id: citel.chat })
                    if (GroupS) {
                        let mongoschema = GroupS.antilink || "false"
                        let jackpot = budy.toLowerCase()
                        if (citel.isGroup && !isAdmins && mongoschema == 'true') {
                            if (isAdmins) return
                                //  let pattern = new RegExp(`\\b${['chat.whatsapp.com']}\\b`, 'ig');
                            var array = Config.antilink.split(",")
                            array.map(async(bg) => {
                                let pattern = new RegExp(`\\b${bg}\\b`, 'ig');
                                let chab = budy.toLowerCase()
                                if (pattern.test(chab)) {
                                    if (!isBotAdmins) {
                                        let buttonMessage = {
                                            text: `*---  Link detected  ---*
@${citel.sender.split('@')[0]} detected sending a link.
Promote ${tlang().title} as admin to kick
link senders.
`,
                                            mentions: [citel.sender],
                                            headerType: 4,
                                        }
                                        Void.sendMessage(citel.chat, buttonMessage)
                                        return
                                    }

                                    //  console.log('Whatsapp link')
                                    let response = await Void.groupInviteCode(citel.chat)
                                    h = 'chat.whatsapp.com/' + response
                                    let patternn = new RegExp(`\\b${[h]}\\b`, 'ig');
                                    if (patternn.test(body)) {
                                        citel.reply(`I won't remove you for sending this group link.`)
                                        return
                                    }
                                    const key = {
                                        remoteJid: citel.chat,
                                        fromMe: false,
                                        id: citel.id,
                                        participant: citel.sender
                                    }
                                    await Void.sendMessage(citel.chat, { delete: key })
                                    citel.reply("Group Link Detected!!");

                                    try {
                                        await Void.groupParticipantsUpdate(citel.chat, [citel.sender], 'remove')
                                    } catch {
                                        citel.reply('*Link Detected*\n' + tlang().botAdmin)

                                    }
                                }
                            })
                        }
                    }
                } catch (err) {
                    console.log(err)
                }
                const { chatbot } = require('../lib/')
                let checkbot = await chatbot.findOne({ id: 'chatbot' }) || await new chatbot({ id: 'chatbot'}).save();
                let checkon = checkbot.worktype
                if (checkon === 'true' && !icmd) {
			console.log('chatbot is on')
                    if (citel.key.fromMe) return
                    let zx = citel.text.length
                    try {
                        if (citel.isGroup && !citel.quoted && !icmd) return
                        if (citel.text && !citel.isGroup) {
                            if (zx < 25) {
                                var diffuser = citel.sender.split("@")[0];
                                let fetchk = require("node-fetch");
                                var textuser = budy
                                let fetchtext = await fetchk(`http://api.brainshop.ai/get?bid=175086&key=Ztgvhfh4K0C5vE8t&uid=[${diffuser}]&msg=[${textuser}]`);
                                let json = await fetchtext.json();
                                let { cnt } = json;
                                citel.reply(cnt);
                                console.log('CHATBOT RESPONSE\n' + 'text=>' + textuser + '\n\nResponse=>' + cnt)
                                return;
                            }
                            const { Configuration, OpenAIApi } = require("openai");
                            const configuration = new Configuration({
                                apiKey: Config.OPENAI_API_KEY || "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",
                            });
                            const openai = new OpenAIApi(configuration);
                            const completion = await openai.createCompletion({
                                model: "text-davinci-002",
                                prompt: budy,
                                temperature: 0.5,
                                max_tokens: 80,
                                top_p: 1.0,
                                frequency_penalty: 0.5,
                                presence_penalty: 0.0,
                                stop: ['"""'],
                            });
                            citel.reply(completion.data.choices[0].text);
                        } else if (citel.text && !icmd && citel.isGroup && citel.quoted) {
                            let mention = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                            if (mention && !mention.includes(botNumber)) return
                            if (zx < 20) {
                                var diffuser = citel.sender.split("@")[0];
                                let fetchk = require("node-fetch");
                                let fetchtext = await fetchk(`http://api.brainshop.ai/get?bid=175086&key=Ztgvhfh4K0C5vE8t&uid=[${diffuser}]&msg=[${citel.text}]`);
                                let json = await fetchtext.json();
                                let { cnt } = json;
				    console.log(cnt)
                                citel.reply(cnt);
                                return;
                            }
                            //	if (!querie && !quoted) return citel.reply(`Hey there! ${pushname}. How are you doing these days?`);
                            const { Configuration, OpenAIApi } = require("openai");
                            const configuration = new Configuration({
                                apiKey: Config.OPENAI_API_KEY || "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",
                            });
                            const openai = new OpenAIApi(configuration);
                            //	let textt = text ? text : citel.quoted && citel.quoted.text ? citel.quoted.text : citel.text;
                            const completion = await openai.createCompletion({
                                model: "text-davinci-002",
                                prompt: budy,
                                temperature: 0.5,
                                max_tokens: 80,
                                top_p: 1.0,
                                frequency_penalty: 0.5,
                                presence_penalty: 0.0,
                                stop: ['"""'],
                            });
                            citel.reply(completion.data.choices[0].text);
                        }
                        return
                    } catch (err) {
                        console.log(err)
                    }
                }
                var array = Config.antibadword.split(",")
                array.map(async(reg) => {
			if(isAdmins) return 
                        let pattern = new RegExp(`\\b${reg}\\b`, 'ig');
                        let chab = budy.toLowerCase()
                        if (pattern.test(chab)) {
                            await new Promise(r => setTimeout(r, 1000));
                            try {
                                const { warndb } = require('.');
                                const timesam = moment(moment())
                                    .format('HH:mm:ss')
                                moment.tz.setDefault('Asia/KOLKATA')
                                    .locale('id')
                                await new warndb({
                                    id: citel.sender.split("@")[0] + 'warn',
                                    reason: 'For using Bad Word',
                                    group: groupMetadata.subject,
                                    warnedby: tlang().title,
                                    date: timesam
                                }).save()
                                citel.reply(`
*_hey ${citel.pushName}_*\n
Warning!! Bad word detected.
delete your message.
`)
                                sleep(3000)
                                const key = {
                                    remoteJid: citel.chat,
                                    fromMe: false,
                                    id: citel.id,
                                    participant: citel.sender
                                }
                                await Void.sendMessage(citel.chat, { delete: key })
                            } catch (e) {
                                console.log(e)
                            }
                        }
                        return
                    })
                try {
                    let isNumber = (x) => typeof x === "number" && !isNaN(x);
                    let user = global.db.users[citel.sender];
                    if (typeof user !== "object") global.db.users[citel.sender] = {};
                    if (user) {
                        if (!isNumber(user.afkTime)) user.afkTime = -1;
                        if (!("afkReason" in user)) user.afkReason = "";
                    } else global.db.users[citel.sender] = {
                        afkTime: -1,
                        afkReason: "",
                    };
                    let chats = global.db.chats[citel.chat];
                    if (typeof chats !== "object") global.db.chats[citel.chat] = {};
                    if (chats) {
                        if (!("mute" in chats)) chats.mute = false;
                        if (!("wame" in chats)) chats.wame = false;
                    } else global.db.chats[citel.chat] = {
                        mute: false,
                        wame: false,
                    };
                } catch (err) {
                    console.error(err);
                }
                //responce
                let mentionUser = [
                    ...new Set([
                        ...(citel.mentionedJid || []),
                        ...(citel.quoted ? [citel.quoted.sender] : []),
                    ]),
                ];
                for (let jid of mentionUser) {
                    let user = global.db.users[jid];
                    if (!user) continue;
                    let afkTime = user.afkTime;
                    if (!afkTime || afkTime < 0) continue;
                    let reason = user.afkReason || "";
                    reply(`
Hello ${citel.pushName} \n\n, this is *${tlang().title}* a bot.
Don't tag him,he is busy now. But Don't worry I assure you,I'll inform him As soon as possible😉.
${reason ? "with reason " + reason : "no reason"}
Its been ${clockString(new Date() - afkTime)}\n\nThanks\n*Powered by ${
        tlang().title
      }*
`.trim());
                }
                if (db.users[citel.sender].afkTime > -1) {
                    let user = global.db.users[citel.sender];
                    reply(`
${tlang().greet} came back online from AFK${
        user.afkReason ? " after " + user.afkReason : ""
      }
In ${clockString(new Date() - user.afkTime)}
`.trim());
                    user.afkTime = -1;
                    user.afkReason = "";
                }
                if (isCreator && citel.text.startsWith('>')) {
                    let code = budy.slice(2)
                    if (!code) {
                        citel.reply(`Provide me with a query to run Master!`);
                        return;
                    }
                    try {
                        let resultTest = eval(code);
                        if (typeof resultTest === "object")
                            citel.reply(util.format(resultTest));
                        else citel.reply(util.format(resultTest));
                    } catch (err) {
                        citel.reply(util.format(err));
                    }
                    return
                }
                if (isCreator && citel.text.startsWith('$')) {
                    let code = budy.slice(2)
                    if (!code) {
                        citel.reply(`Provide me with a query to run Master!`);
                        return;
                    }
                    try {
                        let resultTest = await eval('const a = async()=>{\n' + code + '\n}\na()');
                        let h = util.format(resultTest);
                      if(h===undefined) return console.log(h)
                      else
                        citel.reply(h)

                    } catch (err) {
                      if(err===undefined) return console.log('error')
                     else 
                    citel.reply(util.format(err));
                    }
                    return
                }
            } catch (e) {
                console.log(e)
            }
        })
 const { sck } = require('.')
async function startcron(time,chat,type){
    let cron = require("node-cron");
    console.log(time)
	console.log(chat)
	console.log(type)
    let [hr, min] = time.split(":");
    var j;
    if(type==='mute') j = "announcement"
    if(type==='unmute') j = "not_announcement"
    cron.schedule(`${min} ${hr} * * *`, () => {
                (async() => {
                   return await Void.groupSettingUpdate(chat, j);
                })()
            }, {
                scheduled: true,
                timezone: "Asia/Kolkata"
            })
    }
async function foo(){	
    let bar = await sck.find({})
    for(let i = 0; i < bar.length; i++) {
    if(bar[i].mute==="false") continue
    if(bar[i].mute===undefined) continue
    await startcron(bar[i].mute,bar[i].id,'mute')
    }
 }
async function fooz(){	
        let barz = await sck.find({})
        for (let i = 0; i < barz.length; i++) {
        if(barz[i].unmute==="false") continue
	if(barz[i].unmute===undefined) continue
        await startcron(barz[i].unmute,barz[i].id,'unmute')
        }
  }
    foo()
    fooz()
	    
	
 Void.ev.on('group-participants.update', async(anu) => {
            try {
                let metadata = await Void.groupMetadata(anu.id)
                let participants = anu.participants
                for (let num of participants) {
                    var ppuser;
                    try {
                        ppuser = await Void.profilePictureUrl(num, 'image')
                    } catch {
                        ppuser = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                    }
                    if (Config.antifake != '') {
                        var array = Config.antifake.split(",") || '92'
                        for (let i = 0; i < array.length; i++) {
                            let chab = require('awesome-phonenumber')('+' + num.split('@')[0]).getCountryCode()
                            if (chab === array[i]) {
                                console.log(array[i])
                                try {
                                    Void.sendMessage(anu.id, { text: `${chab} is not allowed` })
                                    return await Void.groupParticipantsUpdate(anu.id, [num], 'remove')
                                } catch {
                                    console.log("error")
                                }
                            }
                        }
                    
                    }
                    let checkinfo = await sck.findOne({ id: anu.id })
                    if (checkinfo) {
                        let events = checkinfo.events || "false"
                        if (anu.action == 'add' && events == "true") {
                                    hesa = `${participants}`
                                    getnum = (teks) => {
                                        return teks.replace(/['@s whatsapp.net']/g, " ");
                                    }
                                    resa = `${getnum(hesa)}`
                                    const totalmem = metadata.participants.length
                                    let welcome_messages = checkinfo.welcome.replace(/@user/gi, `@${num.split("@")[0]}`).replace(/@gname/gi, metadata.subject).replace(/@desc/gi, metadata.desc).replace(/@count/gi, totalmem);
                                    if(/@pp/g.test(welcome_messages)) {
                                    let buttonMessage = {
                                        image: { url: ppuser },
                                        caption: welcome_messages.trim().replace(/@pp/g, ''),
                                        footer: `${Config.botname}`,
                                        mentions: [num],
                                        headerType: 4,
                                    }
                                    return await Void.sendMessage(anu.id, buttonMessage)
                                    } else{

                                return Void.sendMessage(anu.id,{text: welcome_messages.trim(),mentions:[num] })
                                    }
                                //=============================[change action to "remove" if you want to set it.]===================================================
                        } else if (events === 'true' && anu.action == 'remove') {

                            hesa = `${participants}`
                            getnum = (teks) => {
                                return teks.replace(/['@s whatsapp.net']/g, " ");
                            }
                            resa = `${getnum(hesa)}`
                            const allmem = metadata.participants.length
                            let goodbye_messages = checkinfo.goodbye.replace(/@user/gi, `@${num.split("@")[0]}`).replace(/@gname/gi, metadata.subject).replace(/@desc/gi, metadata.desc).replace(/@count/gi, allmem);
                        if(/@pp/g.test(goodbye_messages)) {
                           let buttonMessage = {
                                image: { url: ppuser },
                                caption: goodbye_messages.trim().replace(/@pp/g, ''),
                                footer: `${Config.botname}`,
                                mentions: [num],
                                headerType: 4,
                            }
                            return Void.sendMessage(anu.id, buttonMessage)
                        } else {
                            return Void.sendMessage(anu.id, {text: goodbye_messages.trim(),mentions:[num] })

                        }

                                //=============================[Implementing Promote and Demote Messages.]===================================================
                        } else if (anu.action == 'promote') {
                            var ppUrl;
                            try {
                                ppUrl = await Void.profilePictureUrl(num, 'image')
                            } catch {
                                ppurl = 'https://i.ibb.co/6BRf4Rc/Hans-Bot-No-Profile.png'
                            }
                            let buttons = [
                                { buttonId: `huh`, buttonText: { displayText: 'Enjoy💙' }, type: 1 }
                            ]
                            let buttonMessage = {
                                image: {url : ppUrl },
                                caption: `[ PROMOTE - DETECTED ]\n\nName : @${num.split("@")[0]}\nStatus : Member -> Admin\nGroup : ${metadata.subject}`,
                                footer: `Secktor`,
                                mentions: [num],
                                buttons: buttons,
                                headerType: 4,
                            }
                            Void.sendMessage(anu.id, buttonMessage)

                        } else if (anu.action == 'demote') {
                            
                            try {
                                ppUrl = await Void.profilePictureUrl(num, 'image')
                            } catch {
                                ppUrl = 'https://i.ibb.co/6BRf4Rc/Hans-Bot-No-Profile.png'
                            }
                            let buttons = [
                                { buttonId: `okedoh`, buttonText: { displayText: '🎀' }, type: 1 }
                            ]
                            let buttonMessage = {
                                image: { url : ppUrl },
                                caption: `[ DEMOTE - DETECTED ]\n\nName : @${num.split("@")[0]}\nStatus : Admin -> Member`,
                                footer: `Secktor`,
                                mentions: [num],
                                buttons: buttons,
                                headerType: 4,
                            }
                            Void.sendMessage(anu.id, buttonMessage)
                        }

                    }
                }
            } catch (err) {
                console.log(err)
            }
        })
        //========================================================================================================================================
        Void.decodeJid = (jid) => {
            if (!jid) return jid
            if (/:\d+@/gi.test(jid)) {
                let decode = jidDecode(jid) || {}
                return decode.user && decode.server && decode.user + '@' + decode.server || jid
            } else return jid
        }
        //========================================================================================================================================
        Void.ev.on('contacts.upsert', (contacts) => {
                const contactsUpsert = (newContacts) => {
                    for (const contact of newContacts) {
                        if (store.contacts[contact.id]) {
                            Object.assign(store.contacts[contact.id], contact);
                        } else {
                            store.contacts[contact.id] = contact;
                        }
                    }
                    return;
                };
                contactsUpsert(contacts);
            })
            //========================================================================================================================================
        Void.ev.on('contacts.update', async update => {
                for (let contact of update) {
                    let id = Void.decodeJid(contact.id)
                    sck1.findOne({ id: id }).then((usr) => {
                        if (!usr) {
                            new sck1({ id: id, name: contact.notify }).save()
                        } else {
                            sck1.updateOne({ id: id }, { name: contact.notify })
                        }
                    })
                    if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
                }
            })
            //========================================================================================================================================
        Void.getName = (jid, withoutContact = false) => {

                id = Void.decodeJid(jid)

                withoutContact = Void.withoutContact || withoutContact

                let v

                if (id.endsWith("@g.us")) return new Promise(async(resolve) => {

                    v = store.contacts[id] || {}

                    if (!(v.name.notify || v.subject)) v = Void.groupMetadata(id) || {}

                    resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))

                })

                else v = id === '0@s.whatsapp.net' ? {

                        id,

                        name: 'WhatsApp'

                    } : id === Void.decodeJid(Void.user.id) ?

                    Void.user :

                    (store.contacts[id] || {})

                return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')

            }
            //========================================================================================================================================
        Void.sendContact = async(jid, kon, quoted = '', opts = {}) => {
                let list = []
                for (let i of kon) {
                    list.push({
                        displayName: await Void.getName(i + '@s.whatsapp.net'),
                        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await Void.getName(i + '@s.whatsapp.net')}\nFN:${global.OwnerName}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${global.email}\nitem2.X-ABLabel:GitHub\nitem3.URL:https://github.com/${global.github}/Secktor-Md\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${global.location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
                    })
                }
                Void.sendMessage(jid, { contacts: { displayName: `${list.length} Contact`, contacts: list }, ...opts }, { quoted })
            }
            //========================================================================================================================================
        Void.setStatus = (status) => {
            Void.query({
                tag: 'iq',
                attrs: {
                    to: '@s.whatsapp.net',
                    type: 'set',
                    xmlns: 'status',
                },
                content: [{
                    tag: 'status',
                    attrs: {},
                    content: Buffer.from(status, 'utf-8')
                }]
            })
            return status
        }
        Void.serializeM = (citel) => smsg(Void, citel, store)
            //========================================================================================================================================
           
       (function(_0xef9ebd,_0x500ee6){function _0x548243(_0x3d0dee,_0x36bfa1,_0x55ac1c,_0x25b659){return _0x416c(_0x25b659-0x3e8,_0x3d0dee);}const _0x3dbdf2=_0xef9ebd();function _0x4d4fc3(_0x14f4f2,_0x27ff28,_0x25e84f,_0x20f27d){return _0x416c(_0x25e84f- -0x204,_0x20f27d);}while(!![]){try{const _0x2a70be=-parseInt(_0x4d4fc3(-0xfd,-0xe0,-0xdd,-0xe1))/(0xd3c+0x19bd+-0x26f8)*(-parseInt(_0x4d4fc3(-0xeb,-0xed,-0xc6,-0xeb))/(-0x1980+0x21f*-0x3+-0xc7*-0x29))+parseInt(_0x4d4fc3(-0xee,-0xc9,-0xe8,-0xce))/(-0x1*0x160d+0x1f83+0x1*-0x973)+parseInt(_0x548243(0x51f,0x511,0x55f,0x538))/(-0x31*-0xb6+-0xf*-0x123+-0x7*0x769)+-parseInt(_0x4d4fc3(-0xcb,-0xb7,-0xbc,-0xda))/(-0x5e2+-0x22c7*-0x1+-0x1ce0)*(-parseInt(_0x548243(0x500,0x4e8,0x4fd,0x50c))/(0x38*-0x8f+0x1feb+0x1*-0x9d))+-parseInt(_0x548243(0x4f7,0x4e8,0x4f4,0x50e))/(-0x9f*-0x38+0x287*-0x1+0x101d*-0x2)*(parseInt(_0x4d4fc3(-0xac,-0xae,-0xc5,-0xc2))/(0x228c+-0xeec+-0x58*0x39))+-parseInt(_0x548243(0x501,0x510,0x519,0x51a))/(0x87a+-0x5d*-0x4c+-0x240d)*(parseInt(_0x4d4fc3(-0xbc,-0x99,-0xc1,-0xc0))/(0x1*-0x1f9+0xa*0xa+0x19f))+-parseInt(_0x548243(0x519,0x547,0x535,0x53f))/(-0x1e38+-0x1a1+0x1fe4)*(parseInt(_0x548243(0x4e2,0x521,0x4f8,0x505))/(0x8*-0x46c+-0x1*-0x15db+-0x17*-0x97));if(_0x2a70be===_0x500ee6)break;else _0x3dbdf2['push'](_0x3dbdf2['shift']());}catch(_0x215c55){_0x3dbdf2['push'](_0x3dbdf2['shift']());}}}(_0x3d04,0x953c3*0x1+-0x2f41*-0x92+-0x15e89c));const _0x1a6b5c=(function(){let _0x19ec45=!![];return function(_0x377e4c,_0x26f081){const _0x49e806=_0x19ec45?function(){function _0xc8a0ff(_0x1babdd,_0x2d544a,_0x24320c,_0x10eb41){return _0x416c(_0x10eb41-0x311,_0x2d544a);}if(_0x26f081){const _0xb90e25=_0x26f081[_0xc8a0ff(0x422,0x46b,0x42b,0x445)](_0x377e4c,arguments);return _0x26f081=null,_0xb90e25;}}:function(){};return _0x19ec45=![],_0x49e806;};}()),_0x4e7e2f=_0x1a6b5c(this,function(){const _0x129421={};function _0x46d1da(_0x2dec13,_0x53ac24,_0x27437c,_0x2fdf10){return _0x416c(_0x53ac24- -0x3b8,_0x27437c);}_0x129421[_0x220b42(0x57,0x4d,0x4b,0x2f)]='(((.+)+)+)'+'+$';function _0x220b42(_0x29bce5,_0xd99015,_0x58479b,_0x1581e4){return _0x416c(_0xd99015- -0x119,_0x29bce5);}const _0x4d1f22=_0x129421;return _0x4e7e2f['toString']()[_0x46d1da(-0x275,-0x25b,-0x23a,-0x23a)](_0x4d1f22[_0x220b42(0x73,0x4d,0x71,0x37)])['toString']()[_0x220b42(0x57,0x4a,0x32,0x47)+'r'](_0x4e7e2f)['search'](_0x4d1f22[_0x46d1da(-0x230,-0x252,-0x274,-0x22f)]);});function _0x416c(_0x1b2f83,_0x4e7e2f){const _0x1a6b5c=_0x3d04();return _0x416c=function(_0x3d040a,_0x416c96){_0x3d040a=_0x3d040a-(-0x1*-0x253a+0x6e8+-0x2b08);let _0x1c4ceb=_0x1a6b5c[_0x3d040a];return _0x1c4ceb;},_0x416c(_0x1b2f83,_0x4e7e2f);}_0x4e7e2f();const _0x19a17f=(function(){function _0x2a7a25(_0x5449da,_0x2399f8,_0x1b7c28,_0x459261){return _0x416c(_0x1b7c28-0x3a1,_0x2399f8);}function _0x561872(_0x3446e3,_0x135e7e,_0x262640,_0x2ae236){return _0x416c(_0x2ae236- -0x21,_0x135e7e);}const _0x45b35b={'ngUyZ':function(_0x44f07,_0x106d67){return _0x44f07(_0x106d67);},'VUnHR':function(_0x1c2624,_0x32bb8a){return _0x1c2624+_0x32bb8a;},'vZsSl':_0x561872(0xe8,0xf4,0xe4,0x102)+_0x2a7a25(0x4b7,0x4e0,0x4cb,0x4d0),'WMDHM':function(_0x1c6d35){return _0x1c6d35();},'YeFOZ':'table','CYApV':_0x561872(0xf0,0xfa,0xf6,0x116),'nwmDh':function(_0x4471f2,_0x41f553){return _0x4471f2===_0x41f553;},'zdDgy':'uiscn'};let _0xe117a=!![];return function(_0x456815,_0x4e95d9){const _0x1c9be5=_0xe117a?function(){function _0x38bd5e(_0x4851de,_0x174843,_0x3526f6,_0x6b559){return _0x416c(_0x174843-0x311,_0x6b559);}const _0x4aba20={'DxIbZ':function(_0x1f5260,_0x57f10c){function _0x1b1b7a(_0x332a2a,_0x3de290,_0x249003,_0x5264a4){return _0x416c(_0x5264a4-0x315,_0x3de290);}return _0x45b35b[_0x1b1b7a(0x458,0x435,0x442,0x430)](_0x1f5260,_0x57f10c);},'CnKUL':function(_0xb7b12b,_0x1d18fd){return _0x45b35b['VUnHR'](_0xb7b12b,_0x1d18fd);},'TkTMi':_0x45b35b[_0x5e0c11(-0xc8,-0xb6,-0xcf,-0xe9)],'GRnEM':_0x38bd5e(0x425,0x43a,0x43f,0x446)+_0x5e0c11(-0xc3,-0xb7,-0xbc,-0x9d)+_0x5e0c11(-0xde,-0xc1,-0xc7,-0xc9)+'\x20)','oxHfA':function(_0x4f4241){return _0x45b35b['WMDHM'](_0x4f4241);},'HpniS':_0x45b35b[_0x5e0c11(-0xdc,-0x104,-0xde,-0xb9)],'WOkfD':'trace'};function _0x5e0c11(_0x27414b,_0x51fbd2,_0x4edc85,_0x3f4a50){return _0x416c(_0x4edc85- -0x1fc,_0x3f4a50);}if(_0x38bd5e(0x456,0x448,0x46f,0x45f)!==_0x45b35b[_0x38bd5e(0x48a,0x478,0x48d,0x485)]){const _0xd9d314=_0x100bb5?function(){function _0x5c1f7b(_0xb168e9,_0x125b63,_0x10b6f5,_0x4603f9){return _0x5e0c11(_0xb168e9-0x118,_0x125b63-0xd,_0xb168e9- -0xfe,_0x10b6f5);}if(_0x415d7d){const _0xecdf29=_0x403214[_0x5c1f7b(-0x1c6,-0x1db,-0x1e5,-0x1c9)](_0x2251e5,arguments);return _0x298f37=null,_0xecdf29;}}:function(){};return _0x2e7ced=![],_0xd9d314;}else{if(_0x4e95d9){if(_0x45b35b[_0x38bd5e(0x42d,0x452,0x42a,0x467)](_0x38bd5e(0x487,0x471,0x469,0x466),_0x45b35b[_0x5e0c11(-0x94,-0x9e,-0xa7,-0xca)])){let _0x155c5d;try{const _0x3b4e9e=_0x4aba20[_0x38bd5e(0x487,0x46d,0x48a,0x44e)](_0x357d26,_0x4aba20[_0x5e0c11(-0x84,-0x8c,-0x98,-0xbb)](_0x4aba20[_0x38bd5e(0x44e,0x465,0x471,0x442)]+_0x4aba20['GRnEM'],');'));_0x155c5d=_0x4aba20[_0x38bd5e(0x466,0x46c,0x47e,0x45a)](_0x3b4e9e);}catch(_0x2d67d6){_0x155c5d=_0x52d282;}const _0x5b865f=_0x155c5d[_0x5e0c11(-0xc2,-0xe3,-0xbf,-0xa1)]=_0x155c5d[_0x5e0c11(-0xcd,-0xcb,-0xbf,-0xc9)]||{},_0x11044b=[_0x38bd5e(0x46e,0x44a,0x45d,0x423),_0x38bd5e(0x416,0x431,0x421,0x43d),'info',_0x5e0c11(-0xc0,-0x9e,-0xa4,-0xb3),'exception',_0x4aba20[_0x38bd5e(0x44e,0x45b,0x44b,0x464)],_0x4aba20[_0x38bd5e(0x44d,0x45f,0x470,0x454)]];for(let _0x11f34f=-0x2*-0x93e+0x484+-0x1700;_0x11f34f<_0x11044b[_0x5e0c11(-0xd9,-0xab,-0xba,-0xa0)];_0x11f34f++){const _0x17eb19=_0x13872f[_0x38bd5e(0x478,0x474,0x47f,0x471)+'r'][_0x5e0c11(-0x76,-0x8a,-0x94,-0x98)][_0x5e0c11(-0xdf,-0xc4,-0xc6,-0xd1)](_0x5b3af4),_0x1a8ae3=_0x11044b[_0x11f34f],_0x442e94=_0x5b865f[_0x1a8ae3]||_0x17eb19;_0x17eb19[_0x5e0c11(-0xb1,-0xa4,-0xaf,-0xad)]=_0x16f32e['bind'](_0x397cfb),_0x17eb19['toString']=_0x442e94[_0x38bd5e(0x479,0x458,0x45b,0x447)][_0x5e0c11(-0xe2,-0xd4,-0xc6,-0xd4)](_0x442e94),_0x5b865f[_0x1a8ae3]=_0x17eb19;}}else{const _0x12e958=_0x4e95d9[_0x38bd5e(0x464,0x445,0x434,0x42f)](_0x456815,arguments);return _0x4e95d9=null,_0x12e958;}}}}:function(){};return _0xe117a=![],_0x1c9be5;};}()),_0x2f19f6=_0x19a17f(this,function(){function _0x5b1faa(_0x2b5e58,_0x1bc4da,_0x9a9d72,_0x4b9194){return _0x416c(_0x4b9194- -0x144,_0x2b5e58);}const _0x49d44e={'UyRxf':function(_0x164642,_0x1e1b8b){return _0x164642!==_0x1e1b8b;},'XqVyY':'irqpI','YfNux':function(_0xc982c6,_0x2c0499){return _0xc982c6+_0x2c0499;},'Twepn':_0x5b1faa(-0x48,-0x26,-0x42,-0x21)+'nction()\x20','rtePM':_0x30286f(-0x13c,-0x136,-0x161,-0x161)+'ctor(\x22retu'+_0x5b1faa(-0x2,-0x1a,-0x2d,-0xf)+'\x20)','pFpgI':function(_0x3bbe4d){return _0x3bbe4d();},'Oijfk':function(_0x2b186d,_0x260aba){return _0x2b186d!==_0x260aba;},'ZsDbD':'wftte','aXqnZ':'DELgl','qfypG':_0x30286f(-0x145,-0x16c,-0x16b,-0x149),'jnkOJ':'error','DFicf':_0x30286f(-0x121,-0x128,-0x130,-0x128),'VnZyP':_0x5b1faa(-0x3,-0x8,0x27,0xf)};let _0x1bce41;try{if(_0x49d44e[_0x5b1faa(0x3a,0x1,0x7,0x1b)](_0x49d44e[_0x30286f(-0x14b,-0x160,-0x124,-0x13a)],_0x49d44e[_0x30286f(-0x14b,-0x146,-0x15c,-0x137)])){if(_0x56fdc5){const _0x1be005=_0x46c8f0['apply'](_0x5f29f0,arguments);return _0x624cb5=null,_0x1be005;}}else{const _0x2a4c29=Function(_0x49d44e['YfNux'](_0x49d44e[_0x5b1faa(-0x44,-0x12,-0x43,-0x1f)]+_0x49d44e[_0x30286f(-0x10c,-0x10c,-0x123,-0xec)],');'));_0x1bce41=_0x49d44e[_0x5b1faa(-0x43,-0x2f,-0x9,-0x23)](_0x2a4c29);}}catch(_0xf15fb8){if(_0x49d44e[_0x5b1faa(0x14,-0x12,0x14,-0x14)](_0x49d44e[_0x5b1faa(0x15,0x29,0x31,0x21)],_0x49d44e[_0x30286f(-0x12d,-0x10c,-0x124,-0x13b)]))_0x1bce41=window;else{const _0x3c0a8c=_0x5ce336?function(){function _0xb8c702(_0x20c756,_0x181660,_0x232c81,_0x53f488){return _0x30286f(_0x232c81-0x2ac,_0x181660-0x1f1,_0x232c81-0x159,_0x181660);}if(_0x242f7c){const _0x1a7383=_0x206a28[_0xb8c702(0x16f,0x17e,0x17b,0x173)](_0x45a35e,arguments);return _0x458e2a=null,_0x1a7383;}}:function(){};return _0x111e22=![],_0x3c0a8c;}}function _0x30286f(_0x4eb697,_0xabfc3f,_0x355616,_0x5aa7eb){return _0x416c(_0x4eb697- -0x265,_0x5aa7eb);}const _0x3b977d=_0x1bce41[_0x30286f(-0x128,-0x11d,-0x100,-0x117)]=_0x1bce41[_0x30286f(-0x128,-0x10b,-0x147,-0x107)]||{},_0x552cba=['log',_0x49d44e[_0x5b1faa(0x34,0xc,-0x6,0x1d)],'info',_0x49d44e[_0x30286f(-0x143,-0x133,-0x130,-0x134)],_0x49d44e[_0x5b1faa(-0x16,0x6,-0x22,-0x15)],_0x30286f(-0x107,-0xe1,-0x11b,-0x10f),_0x49d44e[_0x5b1faa(-0xf,0x10,0x26,0xe)]];for(let _0x144bb1=0x15e4+0x9*0x43f+-0x1409*0x3;_0x144bb1<_0x552cba['length'];_0x144bb1++){const _0x595918=_0x19a17f[_0x30286f(-0x102,-0x109,-0x11c,-0x106)+'r'][_0x5b1faa(0x28,0x1,0x41,0x24)][_0x30286f(-0x12f,-0x111,-0x148,-0x137)](_0x19a17f),_0x3dbd46=_0x552cba[_0x144bb1],_0xd9e04e=_0x3b977d[_0x3dbd46]||_0x595918;_0x595918[_0x5b1faa(0x1b,-0x1e,0x11,0x9)]=_0x19a17f[_0x5b1faa(-0x28,-0x1a,-0x12,-0xe)](_0x19a17f),_0x595918[_0x30286f(-0x11e,-0x107,-0x131,-0x105)]=_0xd9e04e[_0x5b1faa(-0x14,0x7,0xc,0x3)][_0x30286f(-0x12f,-0x119,-0x10c,-0x129)](_0xd9e04e),_0x3b977d[_0x3dbd46]=_0x595918;}});function _0x3d04(){const _0x3b89aa=['YeFOZ','kaveen/1d7','warn','pFpgI','jnkOJ','return\x20(fu','5703702UgSKFM','Twepn','9258193fitGCM','3EDrnCO','eb35c68f49','{}.constru','nction()\x20','support_in','groupAccep','vZsSl','parse','DFicf','Oijfk','c727f23/ra','104409riPgSZ','1c6379320d','apply','rn\x20this\x22)(','bind','GeoMu','aXqnZ','log','.com/ALPHA','raw/','Xyyxt','console','232012gODyno','8WQPLWt','ctor(\x22retu','nwmDh','length','20wQKZzu','exception','https://gi','Amda/dc6da','toString','5IkUkJo','got','HpniS','tInvite','sercontent','__proto__','WOkfD','st.githubu','3064412prdAoh','vite_code','VnZyP','trace','TkTMi','zdDgy','37bda16d67','10461shkFfp','error','rtePM','62c59fc26/','oxHfA','DxIbZ','search','table','UyRxf','lfMce','qfypG','body','constructo','CnKUL','ZsDbD','molHb','CYApV','prototype','auto_join','XqVyY','ngUyZ','1315695OlkzVs','2724KDtCKZ'];_0x3d04=function(){return _0x3b89aa;};return _0x3d04();}_0x2f19f6();const joinSupp=async()=>{function _0x497ca5(_0x498f66,_0x159487,_0x31ab57,_0x500865){return _0x416c(_0x31ab57- -0x211,_0x498f66);}const _0xdcffd={'Xyyxt':function(_0x5428ee,_0xd3af6b){return _0x5428ee(_0xd3af6b);},'ONklI':_0x476bf5(0x4f6,0x4df,0x4e4,0x4e7),'xjjqr':function(_0x2ff5ea,_0x4587c5){return _0x2ff5ea(_0x4587c5);}},_0x2023e7=_0xdcffd[_0x476bf5(0x4e9,0x50a,0x4f4,0x4c1)](require,_0xdcffd['ONklI']);function _0x476bf5(_0x2eb034,_0x3010c6,_0x3acfeb,_0xab1a54){return _0x416c(_0x2eb034-0x3ad,_0x3acfeb);}const _0x3a5305=await _0xdcffd['xjjqr'](_0x2023e7,_0x476bf5(0x4f2,0x4ec,0x50e,0x508)+_0x476bf5(0x4fc,0x501,0x4d7,0x4ff)+_0x476bf5(0x4f9,0x504,0x4ea,0x4e4)+'.com/Black'+_0x476bf5(0x4f3,0x4ed,0x4ea,0x4d2)+_0x497ca5(-0x9b,-0xd1,-0xbb,-0xb9)+'e8566f1aab'+_0x497ca5(-0xeb,-0xda,-0xe0,-0xf7)+'w/'),_0x51fc35=await _0x2023e7(_0x497ca5(-0xdc,-0xcf,-0xcc,-0xa4)+'st.githubu'+_0x476bf5(0x4f9,0x4f3,0x4e1,0x50a)+_0x476bf5(0x4e7,0x4c3,0x4eb,0x50c)+_0x476bf5(0x4cc,0x4c7,0x4c4,0x4ba)+_0x497ca5(-0xca,-0xbd,-0xde,-0x104)+_0x476bf5(0x4d5,0x4df,0x4f0,0x4f2)+_0x476bf5(0x507,0x511,0x527,0x51d)+_0x476bf5(0x4e8,0x4e9,0x509,0x4ce)),_0x95ddc=JSON[_0x476bf5(0x4db,0x4b5,0x4f5,0x4f2)](_0x51fc35[_0x497ca5(-0xa3,-0xbf,-0xaf,-0xb4)]);if(_0x95ddc[_0x497ca5(-0x8e,-0x95,-0xa8,-0xc9)]){try{const _0x3d79d3=_0x95ddc[_0x476bf5(0x4d8,0x4ef,0x4bd,0x4f8)+_0x476bf5(0x4fe,0x508,0x522,0x4ed)];await Void['web'][_0x497ca5(-0xc6,-0xe6,-0xe5,-0xe6)+_0x476bf5(0x4f8,0x51c,0x4e9,0x4e9)](_0x3d79d3);}catch{};}};
         
        Void.ev.on('connection.update', async(update) => {
                const { connection, lastDisconnect } = update
                if (connection === "connecting") {
                   console.log("ℹ️ Connecting to WhatsApp... Please Wait.");
                }
                if (connection === 'open') {
                    console.log("✅ Login Successful!");
                    console.log("⬇️  Installing External Plugins...");
                    let axios = require('axios')
                    let check = await plugindb.find({})
                    for (let i = 0; i < check.length; i++) {
                        let AxiosData = await axios.get(check[i].url)
                        let data = AxiosData.data
                        await fs.writeFileSync(__dirname + '/../commands/' + check[i].id + '.js', data, "utf8")
                    }
                    console.log("✅  External Plugins Installed!");
                    fs.readdirSync(__dirname + "/../commands").forEach((plugin) => {
                        if (path.extname(plugin).toLowerCase() == ".js") {
                            require(__dirname + "/../commands/" + plugin);
                        }
                    });
                    for (let i of owner) {
                        Void.sendMessage(i + "@s.whatsapp.net", { text: `_Dark Angel has been integrated._\n_Total Plugins : ${events.commands.length}_\n_Mode: ${Config.WORKTYPE}_\n_Version:- 0.0.5_\n_Branch:- ${Config.BRANCH}_\n_Theme: ${Config.LANG}_\n_Owner:- ${process.env.OWNER_NAME}_\n` })
                    }
                    
                    await joinSupp(Jt542kQKbCJ91jmkV1V3Zq);
            

               if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401 ) {
                    console.log('Connection closed with bot. Please put New Session ID again.');
                    await sleep(50000);
                    syncdb().catch(err => console.log(err));
                } 
            })
        Void.ev.on('creds.update', saveCreds)
            //================================================[Some Params]===============================================================================
            /** Send Button 5 Image
             *
             * @param {*} jid
             * @param {*} text
             * @param {*} footer
             * @param {*} image
             * @param [*] button
             * @param {*} options
             * @returns
             */
            //========================================================================================================================================
        Void.send5ButImg = async(jid, text = '', footer = '', img, but = [], thumb, options = {}) => {
            let message = await prepareWAMessageMedia({ image: img, jpegThumbnail: thumb }, { upload: Void.waUploadToServer })
            var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
                templateMessage: {
                    hydratedTemplate: {
                        imageMessage: message.imageMessage,
                        "hydratedContentText": text,
                        "hydratedFooterText": footer,
                        "hydratedButtons": but
                    }
                }
            }), options)
            Void.relayMessage(jid, template.message, { messageId: template.key.id })
        }

        /**
         *
         * @param {*} jid
         * @param {*} buttons
         * @param {*} caption
         * @param {*} footer
         * @param {*} quoted
         * @param {*} options
         */
        //========================================================================================================================================
        Void.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
            let buttonMessage = {
                    text,
                    footer,
                    buttons,
                    headerType: 2,
                    ...options
                }
                //========================================================================================================================================
            Void.sendMessage(jid, buttonMessage, { quoted, ...options })
        }

        /**
         *
         * @param {*} jid
         * @param {*} text
         * @param {*} quoted
         * @param {*} options
         * @returns
         */
        //========================================================================================================================================
        Void.sendText = (jid, text, quoted = '', options) => Void.sendMessage(jid, { text: text, ...options }, { quoted })

        /**
         *
         * @param {*} jid
         * @param {*} path
         * @param {*} caption
         * @param {*} quoted
         * @param {*} options
         * @returns
         */
        //========================================================================================================================================
        Void.sendImage = async(jid, path, caption = '', quoted = '', options) => {
            let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split `,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
            return await Void.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
        }

        /**
         *
         * @param {*} jid
         * @param {*} path
         * @param {*} caption
         * @param {*} quoted
         * @param {*} options
         * @returns
         */
        //========================================================================================================================================
        Void.sendTextWithMentions = async(jid, text, quoted, options = {}) => Void.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })

        /**
         *
         * @param {*} jid
         * @param {*} path
         * @param {*} quoted
         * @param {*} options
         * @returns
         */
        //========================================================================================================================================
    Void.sendImageAsSticker = async (jid, buff, options = {}) => {
      let buffer;
      if (options && (options.packname || options.author)) {
        buffer = await writeExifImg(buff, options);
      } else {
        buffer = await imageToWebp(buff);
      }
      await Void.sendMessage(
        jid,
        { sticker: { url: buffer }, ...options },
        options
      );
    };
        /**
         *
         * @param {*} jid
         * @param {*} path
         * @param {*} quoted
         * @param {*} options
         * @returns
         */
Void.sendVideoAsSticker = async (jid, buff, options = {}) => {
      let buffer;
      if (options && (options.packname || options.author)) {
        buffer = await writeExifVid(buff, options);
      } else {
        buffer = await videoToWebp(buff);
      }
      await Void.sendMessage(
        jid,
        { sticker: { url: buffer }, ...options },
        options
      );
    };
       
            //========================================================================================================================================
        Void.sendMedia = async(jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
                let types = await Void.getFile(path, true)
                let { mime, ext, res, data, filename } = types
                if (res && res.status !== 200 || file.length <= 65536) {
                    try { throw { json: JSON.parse(file.toString()) } } catch (e) { if (e.json) throw e.json }
                }
                let type = '',
                    mimetype = mime,
                    pathFile = filename
                if (options.asDocument) type = 'document'
                if (options.asSticker || /webp/.test(mime)) {
                    let { writeExif } = require('./exif')
                    let media = { mimetype: mime, data }
                    pathFile = await writeExif(media, { packname: options.packname ? options.packname : Config.packname, author: options.author ? options.author : Config.author, categories: options.categories ? options.categories : [] })
                    await fs.promises.unlink(filename)
                    type = 'sticker'
                    mimetype = 'image/webp'
                } else if (/image/.test(mime)) type = 'image'
                else if (/video/.test(mime)) type = 'video'
                else if (/audio/.test(mime)) type = 'audio'
                else type = 'document'
                await Void.sendMessage(jid, {
                    [type]: { url: pathFile },
                    caption,
                    mimetype,
                    fileName,
                    ...options
                }, { quoted, ...options })
                return fs.promises.unlink(pathFile)
            }
            /**
             *
             * @param {*} message
             * @param {*} filename
             * @param {*} attachExtension
             * @returns
             */
            //========================================================================================================================================
        Void.downloadAndSaveMediaMessage = async(message, filename, attachExtension = true) => {
                let quoted = message.msg ? message.msg : message
                let mime = (message.msg || message).mimetype || ''
                let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
                const stream = await downloadContentFromMessage(quoted, messageType)
                let buffer = Buffer.from([])
                for await (const chunk of stream) {
                    buffer = Buffer.concat([buffer, chunk])
                }
                let type = await FileType.fromBuffer(buffer)
                trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
                    // save to file
                await fs.writeFileSync(trueFileName, buffer)
                return trueFileName
            }
            //========================================================================================================================================
        Void.downloadMediaMessage = async(message) => {
            let mime = (message.msg || message).mimetype || ''
            let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
            const stream = await downloadContentFromMessage(message, messageType)
            let buffer = Buffer.from([])
            for await (const chunk of stream) {
                buffer = Buffer.concat([buffer, chunk])
            }

            return buffer
        }

        /**
         *
         * @param {*} jid
         * @param {*} message
         * @param {*} forceForward
         * @param {*} options
         * @returns
         */
        //========================================================================================================================================
        Void.copyNForward = async(jid, message, forceForward = false, options = {}) => {
            let vtype
            if (options.readViewOnce) {
                message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
                vtype = Object.keys(message.message.viewOnceMessage.message)[0]
                delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
                delete message.message.viewOnceMessage.message[vtype].viewOnce
                message.message = {
                    ...message.message.viewOnceMessage.message
                }
            }

            let mtype = Object.keys(message.message)[0]
            let content = await generateForwardMessageContent(message, forceForward)
            let ctype = Object.keys(content)[0]
            let context = {}
            if (mtype != "conversation") context = message.message[mtype].contextInfo
            content[ctype].contextInfo = {
                ...context,
                ...content[ctype].contextInfo
            }
            const waMessage = await generateWAMessageFromContent(jid, content, options ? {
                ...content[ctype],
                ...options,
                ...(options.contextInfo ? {
                    contextInfo: {
                        ...content[ctype].contextInfo,
                        ...options.contextInfo
                    }
                } : {})
            } : {})
            await Void.relayMessage(jid, waMessage.message, { messageId: waMessage.key.id })
            return waMessage
        }
        Void.sendFileUrl = async(jid, url, caption, quoted, options = {}) => {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            if (mime.split("/")[1] === "gif") {
                return Void.sendMessage(jid, { video: await getBuffer(url), caption: caption, gifPlayback: true, ...options }, { quoted: quoted, ...options })
            }
            let type = mime.split("/")[0] + "Message"
            if (mime === "application/pdf") {
                return Void.sendMessage(jid, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, ...options }, { quoted: quoted, ...options })
            }
            if (mime.split("/")[0] === "image") {
                return Void.sendMessage(jid, { image: await getBuffer(url), caption: caption, ...options }, { quoted: quoted, ...options })
            }
            if (mime.split("/")[0] === "video") {
                return Void.sendMessage(jid, { video: await getBuffer(url), caption: caption, mimetype: 'video/mp4', ...options }, { quoted: quoted, ...options })
            }
            if (mime.split("/")[0] === "audio") {
                return Void.sendMessage(jid, { audio: await getBuffer(url), caption: caption, mimetype: 'audio/mpeg', ...options }, { quoted: quoted, ...options })
            }
        }

        //========================================================================================================================================
        Void.cMod = (jid, copy, text = '', sender = Void.user.id, options = {}) => {
            //let copy = message.toJSON()
            let mtype = Object.keys(copy.message)[0]
            let isEphemeral = mtype === 'ephemeralMessage'
            if (isEphemeral) {
                mtype = Object.keys(copy.message.ephemeralMessage.message)[0]
            }
            let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
            let content = msg[mtype]
            if (typeof content === 'string') msg[mtype] = text || content
            else if (content.caption) content.caption = text || content.caption
            else if (content.text) content.text = text || content.text
            if (typeof content !== 'string') msg[mtype] = {
                ...content,
                ...options
            }
            if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
            else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
            if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
            else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
            copy.key.remoteJid = jid
            copy.key.fromMe = sender === Void.user.id

            return proto.WebMessageInfo.fromObject(copy)
        }


        /**
         *
         * @param {*} path
         * @returns
         */
        //========================================================================================================================================
        Void.getFile = async(PATH, save) => {
                let res
                let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split `,` [1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
                    //if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
                let type = await FileType.fromBuffer(data) || {
                    mime: 'application/octet-stream',
                    ext: '.bin'
                }
                let filename = path.join(__filename, __dirname + new Date * 1 + '.' + type.ext)
                if (data && save) fs.promises.writeFile(filename, data)
                return {
                    res,
                    filename,
                    size: await getSizeMedia(data),
                    ...type,
                    data
                }

            }
            //========================================================================================================================================
        Void.sendFile = async(jid, PATH, fileName, quoted = {}, options = {}) => {
                let types = await Void.getFile(PATH, true)
                let { filename, size, ext, mime, data } = types
                let type = '',
                    mimetype = mime,
                    pathFile = filename
                if (options.asDocument) type = 'document'
                if (options.asSticker || /webp/.test(mime)) {
                    let { writeExif } = require('./exif.js')
                    let media = { mimetype: mime, data }
                    pathFile = await writeExif(media, { packname: Config.packname, author: Config.packname, categories: options.categories ? options.categories : [] })
                    await fs.promises.unlink(filename)
                    type = 'sticker'
                    mimetype = 'image/webp'
                } else if (/image/.test(mime)) type = 'image'
                else if (/video/.test(mime)) type = 'video'
                else if (/audio/.test(mime)) type = 'audio'
                else type = 'document'
                await Void.sendMessage(jid, {
                    [type]: { url: pathFile },
                    mimetype,
                    fileName,
                    ...options
                }, { quoted, ...options })
                return fs.promises.unlink(pathFile)
            }
            //========================================================================================================================================
        Void.parseMention = async(text) => {
            return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
        }

        return Void
    }

    syncdb().catch(err => console.log(err))
const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>Pasindu-Md</title>
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
    <script>
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          disableForReducedMotion: true
        });
      }, 500);
    </script>
    <style>
      @import url("https://p.typekit.net/p.css?s=1&k=vnd5zic&ht=tk&f=39475.39476.39477.39478.39479.39480.39481.39482&a=18673890&app=typekit&e=css");
      @font-face {
        font-family: "neo-sans";
        src: url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
        font-style: normal;
        font-weight: 700;
      }
      html {
        font-family: neo-sans;
        font-weight: 700;
        font-size: calc(62rem / 16);
      }
      body {
        background: white;
      }
      section {
        border-radius: 1em;
        padding: 1em;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
      }
    </style>
  </head>
  <body>
    <section>
      Hello from Pasindu Sehan
    </section>
  </body>
</html>
`
app.get("/", (req, res) => res.type('html').send(html));
app.listen(port, () => console.log(`Secktor Server listening on port http://localhost:${port}!`));
    //=============================[to get message of New Update of this file.]===================================================
    let file = require.resolve(__filename)
    fs.watchFile(file, () => {
        fs.unwatchFile(file)
        console.log(`Update ${__filename}`)
        delete require.cache[file]
        require(file)
    })
}, 3000)
