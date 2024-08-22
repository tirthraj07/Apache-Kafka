## Apache - Kafka

### Tutorial 1

Introduction to Apache Kafka

Source: https://youtu.be/ZJJHm_bd9Zo?si=VYspOO9BuOdqFCnN

In this tutorial, we are going to setup a zookeeper server and a kafka broker using Docker containers

We are also going to use Node JS's kafkajs library

Documentation : https://kafka.js.org/docs/getting-started

Install Package : https://www.npmjs.com/package/kafkajs?activeTab=readme

We will 
	- create a basic kafka client using config.js
	- create topics and partitions using admin.js
	- send the message using producer.js
	- receive the message using consumer.js



__Docker Setup__

Run zookeeper server on port 2181]

```powershell
docker run -p 2181:2181 zookeeper -d
```

Run kafka broker on port 9092 and setup the environment variables

```powershell
docker run -p 9092:9092 \
-e KAFKA_ZOOKEEPER_CONNECT=host.docker.internal:2181 \
-e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://host.docker.internal:9092 \
-e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 \
confluentinc/cp-kafka
```
