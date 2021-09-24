export default function getById(request, response) {
    response.statusCode = 200;
    response.setHeader('Content-type', 'application/json');
    response.end(request.query.id);
}
