from flask import Flask, request,jsonify
from twilio.rest import Client

app = Flask(__name__)

# Twilio Credentials
#get ur twilio id from twilio website
TWILIO_SID = "twilio_sid"
TWILIO_AUTH = "twilio_auth"
TWILIO_PHONE = "twilio_phone"
PARENT_PHONE = "ur_phone_number"

client = Client(TWILIO_SID, TWILIO_AUTH)

@app.route("/send-sms", methods=["POST"])
def send_sms_and_call():
    data = request.json or {}
    website = data.get("website", "")

    if not website:
        return jsonify({"error": "Missing website URL"}), 400

    try:
        print("hello")
        sms = client.messages.create(
            body=f"🚨 Alert! Your child just opened: {website}",
            from_=TWILIO_PHONE,
            to=PARENT_PHONE
        )

        call = client.calls.create(
            twiml=f'<Response><Say>Alert! Your child has opened {website}. Please check immediately.</Say></Response>',
            from_=TWILIO_PHONE,
            to=PARENT_PHONE
        )

        return jsonify({
            "status": "success",
            "sms_sid": sms.sid,
            "call_sid": call.sid,
            "message": "SMS sent and call initiated"
        }), 200

    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"status": "error", "message": str(e)}), 500
if __name__ == "__main__":
    app.run(port=5000)
