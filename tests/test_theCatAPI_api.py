import requests
ENDPOINT = "https://api.thecatapi.com/v1/images/search"

def test_can_call_endpoint():
    response = requests.get(ENDPOINT)
    assert response.status_code == 200