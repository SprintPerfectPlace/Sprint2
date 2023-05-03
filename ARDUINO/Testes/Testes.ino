#include <DHT.h>
#define dht_type DHT11 //define qual o tipo desensor DHTxx que se está utilizando 
int dht_pin = A1;
DHT dht_1 = DHT(dht_pin, dht_type); //pode-se configurar diversos sensores DHTxx

void setup()
{
  Serial.begin(9600);
  dht_1.begin();
}

void loop()
{
  float umidade = dht_1.readHumidity();
  float temperatura = dht_1.readTemperature();
  if(isnan (temperatura) or isnan(umidade))
  {
    Serial.println("Erro ao ler o DHT");
  }
  else
  {
    Serial.print("Umidade: ");
    Serial.print(umidade);
    Serial.print("%");
    Serial.print(" Temperatura: ");
    Serial.print(temperatura);
    Serial.print(" °C");
  }
  delay(5000);
}
