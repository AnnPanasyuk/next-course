export default function echo(request, response) {
    response.statusCode = 200;
    response.setHeader('Content-type', 'application/json');
    response.end(JSON.stringify({
        message: request.query.message ?? 'Base settings'
    }));
}