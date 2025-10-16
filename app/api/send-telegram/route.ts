import { NextResponse } from "next/server"

const TELEGRAM_BOT_TOKEN = "8273365011:AAEptS6otc5CtOoK7Vt2k49Y-LsZoPVBuTY"
const TELEGRAM_CHAT_ID = "-1003118142354"

export async function POST(request: Request) {
  try {
    const { name, phone, message } = await request.json()

    // Format the message for Telegram
    const telegramMessage = `
🆕 Yangi xabar World Waters saytidan!

👤 Ism: ${name}
📞 Telefon: ${phone}
💬 Xabar: ${message}

⏰ Vaqt: ${new Date().toLocaleString("uz-UZ", { timeZone: "Asia/Tashkent" })}
    `.trim()

    // Send message to Telegram
    const telegramApiUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`

    const response = await fetch(telegramApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: telegramMessage,
        parse_mode: "HTML",
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      console.error("Telegram API error:", data)
      return NextResponse.json({ success: false, error: "Telegram API xatosi" }, { status: 500 })
    }

    return NextResponse.json({ success: true, message: "Xabar muvaffaqiyatli yuborildi!" })
  } catch (error) {
    console.error("Error sending message:", error)
    return NextResponse.json({ success: false, error: "Xabar yuborishda xatolik yuz berdi" }, { status: 500 })
  }
}
