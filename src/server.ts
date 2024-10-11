import app from './app';

/**
 * The port number on which the server will listen for incoming connections.
 * @constant {number}
 */
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});