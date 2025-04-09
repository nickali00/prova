import logging
from telegram import Update
from telegram.ext import Updater, CommandHandler, CallbackContext
from dotenv import load_dotenv
import os

# Carica le variabili d'ambiente dal file .env
load_dotenv()

# Ottieni il token del bot dalla variabile d'ambiente
TOKEN = os.getenv("TELEGRAM_TOKEN")

logging.basicConfig(format='%(asctime)s - %(name)s - %(levelname)s - %(message)s', level=logging.INFO)
logger = logging.getLogger(__name__)

def start(update: Update, context: CallbackContext) -> None:
    update.message.reply_text('Ciao! Sono un bot Telegram.')

def main():
    """Avvia il bot."""
    updater = Updater(TOKEN, use_context=True)

    # Aggiungi handler per il comando "/start"
    updater.dispatcher.add_handler(CommandHandler("start", start))

    # Avvia il bot
    updater.start_polling()

    # Esegui il bot fino a quando non viene interrotto
    updater.idle()

if __name__ == '__main__':
    main()
