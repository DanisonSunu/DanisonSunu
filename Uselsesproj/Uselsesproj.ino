#include <WiFi.h>
#include <HTTPClient.h>

// =====================================
// WIFI
// =====================================

const char* ssid = "Samsung M34 5G";
const char* password = "dani2115";


// =====================================
// LAPTOP SERVER
// CHANGE IP IF YOUR LAPTOP IP CHANGES
// =====================================

const char* serverBase =
    "http://10.70.155.63:5000/distance";


// =====================================
// HC-SR04 PINS
// =====================================

#define TRIG_PIN 26
#define ECHO_PIN 25


// =====================================
// GET ONE DISTANCE READING
// =====================================

float getDistance() {

    digitalWrite(TRIG_PIN, LOW);
    delayMicroseconds(2);

    digitalWrite(TRIG_PIN, HIGH);
    delayMicroseconds(10);

    digitalWrite(TRIG_PIN, LOW);

    long duration =
        pulseIn(ECHO_PIN, HIGH, 30000);

    if (duration == 0) {

        return -1;

    }

    float distance =
        duration * 0.0343 / 2;

    if (distance < 2 || distance > 400) {

        return -1;

    }

    return distance;
}


// =====================================
// GET STABLE DISTANCE
// =====================================

float getStableDistance() {

    float readings[5];

    int count = 0;


    for (int i = 0; i < 5; i++) {

        float d = getDistance();


        if (d > 2 && d < 400) {

            readings[count] = d;

            count++;

        }


        delay(40);

    }


    if (count == 0) {

        return -1;

    }


    float sum = 0;


    for (int i = 0; i < count; i++) {

        sum += readings[i];

    }


    return sum / count;

}


// =====================================
// SEND DISTANCE TO SERVER
// =====================================

void sendDistance(float distance) {

    if (WiFi.status() != WL_CONNECTED) {

        Serial.println("Wi-Fi disconnected!");

        return;

    }


    HTTPClient http;


    String url =
        String(serverBase) +
        "?value=" +
        String(distance, 1);


    http.begin(url);


    int httpCode =
        http.GET();


    Serial.print("Server response: ");

    Serial.println(httpCode);


    http.end();

}


// =====================================
// SETUP
// =====================================

void setup() {

    Serial.begin(115200);


    pinMode(TRIG_PIN, OUTPUT);

    pinMode(ECHO_PIN, INPUT);


    Serial.println();
    Serial.println("Connecting to Wi-Fi...");


    WiFi.begin(
        ssid,
        password
    );


    while (
        WiFi.status() != WL_CONNECTED
    ) {

        delay(500);

        Serial.print(".");

    }


    Serial.println();
    Serial.println("Wi-Fi Connected!");

    Serial.print("ESP32 IP: ");

    Serial.println(
        WiFi.localIP()
    );


    Serial.println(
        "Distance System Started!"
    );

}


// =====================================
// LOOP
// =====================================

void loop() {

    float distance =
        getStableDistance();


    if (distance > 0) {

        Serial.print("Distance: ");

        Serial.print(distance, 1);

        Serial.println(" cm");


        sendDistance(distance);

    }


    delay(400);

}