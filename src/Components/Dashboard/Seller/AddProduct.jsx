import { useForm } from "react-hook-form";


const AddProduct = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }
// title price stoke brande desciption cetagory btn 
    return (
        <div>
            <h2 className="font-semibold text-2xl text-center">Add Product</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold">Title</span>
                    </label>
                    <input type="text" placeholder="Title" className="input input-bordered"
                        {...register("title", { required: true })}
                    />
                    {errors.title && (
                        <p className="text-red-500 font-light text-sm">Title is required</p>
                    )}
                </div>
              <div className="flex gap-5 w-full">
              <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-bold">Brend</span>
                    </label>
                    <input type="text" placeholder="Brend" className="input input-bordered"
                        {...register("brend", { required: true })}
                    />
                    {errors.brend && (
                        <p className="text-red-500 font-light text-sm">Brend is required</p>
                    )}
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-bold">Price</span>
                    </label>
                    <input type="number" placeholder="price" className="input input-bordered"
                        {...register("price", { required: true })}
                    />
                    {errors.price && (
                        <p className="text-red-500 font-light text-sm">Price is required</p>
                    )}
                </div>
              </div>
               <div className="flex gap-5 w-full">
               <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-bold">Stock</span>
                    </label>
                    <input type="text" placeholder="stock" className="input input-bordered"
                        {...register("stock", { required: true })}
                    />
                    {errors.stock && (
                        <p className="text-red-500 font-light text-sm">Stock is required</p>
                    )}
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-bold">Cetagory</span>
                    </label>
                    <input type="text" placeholder="Cetagory" className="input input-bordered"
                        {...register("cetagory", { required: true })}
                    />
                    {errors.cetagory && (
                        <p className="text-red-500 font-light text-sm">Cetagory is required</p>
                    )}
                </div>
               </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold">Description
                        </span>
                    </label>
                    <textarea type="text" placeholder="" className="h-24 input input-bordered"
                        {...register("desciption", { required: true })}
                    />
                    {errors.desciption && (
                        <p className="text-red-500 font-light text-sm">desciption is required</p>
                    )}
                </div>
                <div className="mt-8 w-full">
                <button type="submit" className="btn w-full btn-outline">Add Product</button>
                </div>
              
            </form>
        </div>
    );
};

export default AddProduct;