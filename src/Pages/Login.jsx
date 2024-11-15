import { Link, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { useForm } from "react-hook-form";
import GoogleLoginRegistation from "../Components/GoogleLoginRegistation";


const Login = () => {
    const {LoginUser} = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const navigate = useNavigate()

      const onSubmit= (data)=>{
        LoginUser(data.email , data.password)
        navigate("/")
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
                        <h1 className="text-3xl text-center font-bold">Login now!</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered"
                                {...register("email" ,{required:true})}
                                  />
                                  {errors.email &&(
                                    <p className="text-red-500 font-light text-sm">Email is required</p>
                                  )}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" 
                                {...register("password" ,{required:true ,minLength:6})}/>
                                 {errors.password?.type === "required" &&(
                                    <p className="text-red-500 font-light text-sm">Password is required</p>
                                  )}
                                 {errors.password?.type === "minLength" &&(
                                    <p className="text-red-500 font-light text-sm">Password must have at least 6 ceracter</p>
                                  )}
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">Login</button>
                            </div>
                            <div>
                                <GoogleLoginRegistation></GoogleLoginRegistation>
                            </div>
                            <div className="my-5 text-center text-sm">
                                <p>New here? please <Link className="text-blue-500" to="/register">Register</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;