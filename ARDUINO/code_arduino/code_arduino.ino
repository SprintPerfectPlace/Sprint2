#include <DHT.h>
#include <DHT_U.h>

#include <DHT.h>
#include <DHT_U.h>

#include <Adafruit_Sensor.h>

#include <DHT.h>
#include <DHT_U.h>

#define DHTPIN A0
#define LM35PIN A1
// #define LUMIPIN A2
#define CHAVPIN 7

DHT dht(DHTPIN, DHT11);

void setup() {
  pinMode(DHTPIN, INPUT);
  pinMode(CHAVPIN, INPUT);
  Serial.begin(9600);
  dht.begin();
}

void loop() {
  float dht11_umidade = dht.readHumidity();
  // float dht11_temperatura = dht.readTemperature();
  Serial.print(dht11_umidade);
  Serial.print(";");
  // Serial.print(dht11_temperatura);
  //   Serial.print(";");
          
    // float luminosidade = analogRead(LUMIPIN);
    // Serial.print(luminosidade);
    // Serial.print(";");
    float lm35_temperatura = analogRead(LM35PIN);
    lm35_temperatura = lm35_temperatura * 0.00488;
    lm35_temperatura = lm35_temperatura * 100;
    Serial.print(lm35_temperatura);
    Serial.print(";");

    int aproximidade = digitalRead(7);
    if(aproximidade == 0){
      Serial.print("0");
      
    } else { Serial.print("1");}

    Serial.println();
    
<<<<<<< HEAD
delay(20000);
=======
delay(10000);
>>>>>>> ea02a4a613524e972b4e1daf51fb94502d2e8d34
    };
