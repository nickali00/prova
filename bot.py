import logging
from telegram import Update
from telegram.ext import Application, CommandHandler, CallbackContext
from dotenv import load_dotenv
import os

# Carica le variabili d'ambiente dal file .env
load_dotenv()

# Ottieni il token del bot dalla variabile d'ambiente
TOKEN = os.getenv("TELEGRAM_TOKEN")

# Configura il logging
logging.basicConfig(format='%(asctime)s - %(name)s - %(levelname)s - %(message)s', level=logging.INFO)
logger = logging.getLogger(__name__)

# Funzione di gestione del comando /start
async def start(update: Update, context: CallbackContext) -> None:
    await update.message.reply_text('Ciao! Sono un bot Telegram.')

# Funzione principale per avviare il bot
def main():
    """Avvia il bot."""
    # Crea l'istanza dell'applicazione (versione moderna di python-telegram-bot)
    application = Application.builder().token(TOKEN).build()

    # Aggiungi handler per il comando "/start"
    application.add_handler(CommandHandler("start", start))

    # Avvia il bot
    application.run_polling()

if __name__ == '__main__':
    main()
