let handler = function (m) {
  // this.sendContact(m.chat, '6281515860089', 'Nurutomo', m)
  this.sendContact(m.chat, '6283153406515', 'RIYAN BOTZ', m)
  conn.fakeReply(m.chat, '_*TUH OWNER KU TOD*_', '0@s.whatsapp.net', '_MAU DI APAIN_', 'status@broadcast')
}
handler.command = /^owner$/i

module.exports = handler
