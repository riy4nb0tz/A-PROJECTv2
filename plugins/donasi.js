let handler  = async (m, { conn, usedPrefix: _p }) => {
        conn.reply(m.chat, `
╭───❉ *「  DONASI 」 * ❉─────•>
╠➥ *PULSA : 083153406515*
╠➥ *GOPAY : Minta Ke Owner*
╰──────────────•>
┏━❉ *《HELP》* ❉━┓
╠➠ *${_p}owner*
┗━━━━━━━━━━━┛
`.trim(), m)
}
handler.command = /^donasi$/i

module.exports = handler
