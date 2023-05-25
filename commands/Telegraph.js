
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
//---------------------------------------------------------------------------
const { Insta,cmd } = require('../lib')
cmd({         pattern: "insta",         desc: "download instagram post.",         category: "downloader",         filename: __filename     },     async(Void, citel,text,{isCreator}) => {
if(!text) return citel.reply('Pasindu-MD Need post url.')
let response = await Insta(text)
for (let i=0;i<response.length;i++) {
await Void.sendFileUrl(citel.chat, response[i], `*Downloaded Media from instagram.*`, citel)
}     }); 
