const update = {
  init: () => {
    const elementsData = document.getElementsByClassName("bt-update");
    for (let elementData of elementsData)
      elementData.addEventListener("click", update.updateData);
  },
  updateData: async (e) => {
    const id = document.getElementById("bt-update").value;

    const data = await fetch(`/users/${id}`, {
      method: "PATCH",
      body: new FormData(document.getElementById("form-update-data")),
    });
  },
};

document.addEventListener("DOMContentLoaded", update.init);
