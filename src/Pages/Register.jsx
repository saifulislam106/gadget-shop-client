import { Link, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { useForm } from "react-hook-form";
import GoogleLoginRegistation from "../Components/GoogleLoginRegistation";
// import { useContext } from "react";
// import { AuthContext } from "../AuthProvider/AuthProvider";


const Register = () => {
    const { CreateUser } = useAuth();
    // const { CreateUser } = useContext(AuthContext)

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();

    const onSubmit = (data) => {
        const email = data.email;
        const role = data.role;
        const status = role ==="Buyer" ? "approped" : "pending";
        const wishlist = [];
        const userData = {email , role , status , wishlist}

        // CreateUser(data.email, data.password)
        // navigate("/")
        console.log(userData);

    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">

                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <h1 className="text-3xl text-center font-bold">Register now!</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered"
                                    {...register("email", { required: true })}
                                />
                                {errors.email && (
                                    <p className="text-red-500 font-light text-sm">Email is required</p>
                                )}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered"
                                    {...register("password", { required: true, minLength: 6 })} />
                                {errors.password?.type === "required" && (
                                    <p className="text-red-500 font-light text-sm">Password is required</p>
                                )}
                                {errors.password?.type === "minLength" && (
                                    <p className="text-red-500 font-light text-sm">Password must have at least 6 ceracter</p>
                                )}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered"
                                    {...register("confirmPassword", {
                                        required: true,
                                        validate: (value) => {
                                            if (watch("password") != value) {
                                                return "Your password do not match"
                                            }
                                        }
                                    })} />
                                {errors.confirmPassword && (
                                    <p className="text-red-500 font-light text-sm">Both password must match</p>
                                )}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Role</span>
                                </label>
                                <select className="select select-bordered w-full max-w-xs" 
                                {...register("role" ,{required:true})}>
                                    <option>Buyer</option>
                                    <option>Seller</option>
                                </select>
                                {errors.role&& (
                                    <p className="text-red-500 font-light text-sm">You must have a roll</p>
                                )}
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">Register</button>
                            </div>
                            <div>
                                <GoogleLoginRegistation></GoogleLoginRegistation>
                            </div>
                            <div className="my-5 text-center text-sm">
                                <p>Already have an account ? please <Link className="text-blue-500" to="/login">Login</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;