FROM openjdk:8-jdk-alpine
MAINTAINER Oleg Nenashev <o.v.nenashev@gmail.com>

ARG VERSION=3.29
ARG user=jenkins
ARG group=jenkins
ARG uid=1001
ARG gid=1001
ARG maversion=3.5.4

ENV HOME /home/${user}
RUN addgroup -g ${gid} ${group}
RUN adduser -h $HOME -u ${uid} -G ${group} -D ${user}
LABEL Description="This is a base image, which provides the Jenkins agent executable (slave.jar)" Vendor="Jenkins project" Version="${VERSION}"

ARG AGENT_WORKDIR=/home/${user}/agent

RUN apk add --update --no-cache curl bash git git-lfs openssh-client openssl procps \
  && curl --create-dirs -fsSLo /usr/share/jenkins/slave.jar https://repo.jenkins-ci.org/public/org/jenkins-ci/main/remoting/${VERSION}/remoting-${VERSION}.jar \
  && chmod 755 /usr/share/jenkins \
  && chmod 644 /usr/share/jenkins/slave.jar \
  && apk del curl
USER ${user}
ENV AGENT_WORKDIR=${AGENT_WORKDIR}
RUN mkdir /home/${user}/.jenkins && mkdir -p ${AGENT_WORKDIR}

VOLUME /home/${user}/.jenkins
VOLUME ${AGENT_WORKDIR}
COPY gatling-framework gatling-framework
WORKDIR /opt/

# GATLING
USER root
# VOLUME ["/home/core/gat_sakthi/gatframework/gatling-framework/target"]
RUN wget http://www-us.apache.org/dist/maven/maven-3/${maversion}/binaries/apache-maven-${maversion}-bin.tar.gz \
    && tar -xvzf apache-maven-${maversion}-bin.tar.gz \
    && mv apache-maven-${maversion} maven
WORKDIR /etc/profile.d/
COPY maven.sh /etc/profile.d/
RUN chmod +x maven.sh
WORKDIR /gatling-framework/
# RUN /bin/bash -c "source /etc/profile.d/maven.sh"
RUN source /etc/profile.d/maven.sh

CMD /opt/maven/bin/mvn clean gatling:execute -Dtestduration=1 -Dtestpack=ScenarioList_v4.json
#CMD /opt/maven/bin/mvn clean gatling:execute -Dusers=10
#CMD sleep 50000
