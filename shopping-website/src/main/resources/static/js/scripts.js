document.addEventListener("DOMContentLoaded", function() {
    const searchBar = document.getElementById("search-bar");
    const addressSelect = document.getElementById("address-select");
    const itemContainer = document.getElementById("item-container");

    // Function to fetch items based on search query
    function fetchItems(query) {
        fetch(`/api/items?search=${query}`)
            .then(response => response.json())
            .then(data => {
                displayItems(data);
            })
            .catch(error => console.error('Error fetching items:', error));
    }

    // Function to display items in the item container
    function displayItems(items) {
        itemContainer.innerHTML = '';
        items.forEach(item => {
            const itemCard = document.createElement("div");
            itemCard.className = "item-card";
            itemCard.innerHTML = `
                <h3>${item.name}</h3>
                <p>Price: $${item.price}</p>
                <p>${item.description}</p>
                <button onclick="viewItemDetails(${item.id})">View Details</button>
            `;
            itemContainer.appendChild(itemCard);
        });
    }

    // Function to handle search input
    searchBar.addEventListener("input", function() {
        const query = searchBar.value;
        fetchItems(query);
    });

    // Function to change address
    addressSelect.addEventListener("change", function() {
        const selectedAddress = addressSelect.value;
        console.log("Selected address:", selectedAddress);
        // Optionally, you can trigger a search or update items based on the address
    });

    // Function to view item details
    window.viewItemDetails = function(itemId) {
        window.location.href = `/items/${itemId}`;
    };
});