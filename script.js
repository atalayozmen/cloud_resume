const counter = document.querySelector(".visitor-count-banner");

async function getVisitorCount() {
    try {
        const response = await fetch("https://4tah9vlqt9.execute-api.eu-west-1.amazonaws.com/prod/", {
            method: 'PUT', // Using PUT method
            headers: {
                'Content-Type': 'application/json'
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // Assuming the response is a JSON object with a 'count' property
        counter.innerHTML = `You are visitor number <strong>${data.count}</strong>!<br>This counter is powered by DynamoDB and AWS Lambda.`;
    } catch (error) {
        console.error('Error fetching visitor count:', error);
        counter.innerHTML = 'Visitor count is currently unavailable.';
    }
}

getVisitorCount();
