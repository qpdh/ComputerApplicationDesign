FROM ubuntu:latest
ENV cpu_arch=amd64
RUN apt-get update -y
RUN apt-get install -y sysbench
RUN apt-get clean
CMD ["/usr/bin/sysbench"]