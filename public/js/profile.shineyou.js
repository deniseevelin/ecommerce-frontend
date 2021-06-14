const update = {
  init: () => {
    const elementsData = document.getElementsByClassName("bt-update");
    for (let elementData of elementsData)
      elementData.addEventListener("click", update.updateData);

    const elementsAddress = document.getElementsByClassName("bt-updateaddress");
    for (let elementAddress of elementsAddress)
      elementAddress.addEventListener("click", update.updateAddress);
  },
  updateData: async (e) => {
    const id = document.getElementById("bt-update").value;

    const data = await fetch(`/users/${id}`, {
      method: "PUT",
      body: new FormData(document.getElementById("form-update-data")),
    });

    console.log(data);
  },
  updateAddress: async (e) => {
    const id = document.getElementById("bt-update").value;

    const address = await fetch(`/users/${id}`, {
      method: "PUT",
      body: new FormData(document.getElementById("form-update-address")),
    });

    console.log(address);
  },
};

document.addEventListener("DOMContentLoaded", update.init);
