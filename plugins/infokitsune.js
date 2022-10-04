let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭─˗ˏˋ *INFORMASI Kitsune* ´ˎ˗
│ ✎ _Nama_ : Kitsune
│ ✎ _Sekolah_ : SMPN 21 Bandar Lampung
│ ✎ _Umur_ : 14
│ ✎ _Asal_ : lampung
│ ✎ _Status_ : Pelajar SMP
│ ✎ _WhatsApp_ :
│    wa.me/6282135299526
╰──────────────
`.trim(), m)
}

handler.help = ['infokitsune']
handler.tags = ['main', 'utama']
handler.command = /^(info)$/i

handler.exp = 150

module.exports = handler
