#usa o Nginx como servidor web
FROM nginx:alpine
#remove a pagina padrao do Nginx
RUN  rm -rf /usr/share/nginx/html/*
#copia todos os arquivos para dentro do Nginx
COPY . /usr/share/nginx/html
#Porta padrão do Nginx
EXPOSE 80