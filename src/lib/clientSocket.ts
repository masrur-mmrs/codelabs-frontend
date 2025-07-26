export const createSocket = (): WebSocket => {
    const wsUrl = process.env.NEXT_PUBLIC_WS_URL || "ws://localhost:4000";
    const socket = new WebSocket(wsUrl);
    socket.onopen = () => {
        console.log("WebSocket connection established");
    };
    socket.onclose = () => {
        console.log("WebSocket connection closed");
    };
    socket.onerror = (event: Event) => {
        console.error("WebSocket error:", event.type, event);
    };
    return socket;
}