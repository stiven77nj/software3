# Imagen de node
FROM node
# Directorio que contendrá la aplicacion. -p en caso de que no existan las carpetas
RUN mkdir -p /usr/src/app
# Se redirecciona al directorio de trabajo
WORKDIR /usr/src/app
# Se deben adjuntar las dependecias necesarias al directorio de trabajo
COPY package*.json ./
# Se debe ejecutar el comando "npm install", para instalar los modulos de nodejs
RUN npm install
# Agrupar el código fuente de la aplicación dentro de la imagen de Docker
COPY . .
# Puerto de la aplicacion
EXPOSE 4000
# Comando para iniciar la aplicacion
CMD [ "npm", "run", "dev" ]