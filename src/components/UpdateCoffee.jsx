import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const updateCoffee = useLoaderData();
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    updateCoffee;

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const updatedCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    // console.log(newCoffee);

    //* send data to the server
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          /* alert */
          Swal.fire({
            title: "Success!",
            text: "Coffee update successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };
  return (
    <div className="bg-[#F4F3F0] p-24">
      <h3 className="font-extrabold text-3xl">Update Coffee: {name}</h3>

      <form onSubmit={handleUpdateCoffee}>
        {/* row 1 */}
        <div className="flex flex-col md:flex-row gap-2  gap-2 ">
          <div className="md:w-1/2">
            <label className="label font-bold">
              <span className="label-text">Coffee Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={name}
              placeholder="Coffee name"
              className="input input-bordered w-full "
            />
          </div>
          <div className="md:w-1/2 ">
            <label className="label font-bold">
              <span className="label-text">Quantity </span>
            </label>
            <input
              type="text"
              defaultValue={quantity}
              name="quantity"
              placeholder="Quantity "
              className="input input-bordered w-full "
            />
          </div>
        </div>
        {/* row 2 */}
        <div className="flex flex-col md:flex-row gap-2 gap-2 ">
          <div className="md:w-1/2">
            <label className="label font-bold">
              <span className="label-text">Supplier</span>
            </label>
            <input
              type="text"
              defaultValue={supplier}
              name="supplier"
              placeholder="Supplier name"
              className="input input-bordered w-full "
            />
          </div>
          <div className="md:w-1/2">
            <label className="label font-bold">
              <span className="label-text">Taste </span>
            </label>
            <input
              type="text"
              defaultValue={taste}
              name="taste"
              placeholder="Taste "
              className="input input-bordered w-full "
            />
          </div>
        </div>
        {/* row 3 */}
        <div className="flex flex-col md:flex-row gap-2 gap-2 ">
          <div className="md:w-1/2">
            <label className="label font-bold">
              <span className="label-text">Category</span>
            </label>
            <input
              type="text"
              defaultValue={category}
              name="category"
              placeholder="Category name"
              className="input input-bordered w-full "
            />
          </div>
          <div className="md:w-1/2">
            <label className="label font-bold">
              <span className="label-text">Details </span>
            </label>
            <input
              type="text"
              defaultValue={details}
              name="details"
              placeholder="Details "
              className="input input-bordered w-full "
            />
          </div>
        </div>
        {/* row 4 */}
        <div className="flex flex-col md:flex-row gap-2 gap-2 ">
          <div className="md:w-full">
            <label className="label font-bold">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="text"
              name="photo"
              defaultValue={photo}
              placeholder="Photo URL"
              className="input input-bordered w-full "
            />
          </div>
        </div>
        {/* row 4 */}
        <div className="flex flex-col md:flex-row gap-2 gap-2 mt-1">
          <div className="md:w-full">
            <input
              className="btn w-full btn btn-block bg-[#D2B48C]"
              type="submit"
              value="Update"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateCoffee;
