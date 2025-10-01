FROM node
WORKDIR /home/app
COPY . /home/app
EXPOSE 2000
RUN npm i
RUN echo "MyItem API app is running on port 2000..."
CMD ["npm", "start"]
