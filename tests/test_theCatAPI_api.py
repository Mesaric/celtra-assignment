import requests

def test_returnOneCat():
    ENDPOINT = "https://api.thecatapi.com/v1/images/search"

    response = requests.get(ENDPOINT)

    assert response.status_code == 200
    assert len(response.json()) == 1

def test_returnTenCats():
    ENDPOINT = "https://api.thecatapi.com/v1/images/search?limit=10"

    response = requests.get(ENDPOINT)

    assert response.status_code == 200
    assert len(response.json()) == 10

def test_returnCatById():
    ENDPOINT = "https://api.thecatapi.com/v1/images"
    IMAGE_ID = "c0r"

    response = requests.get(ENDPOINT + "/" + IMAGE_ID)

    assert response.status_code == 200
    assert response.json()['id'] == IMAGE_ID
    