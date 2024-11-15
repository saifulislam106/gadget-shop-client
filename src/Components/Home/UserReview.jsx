import Review from "./Review";


const UserReview = () => {
    return (
        <div>
            <h3 className="text-3xl font-bold text-center my-10">User Review</h3>
            <div className="lg:flex justify-between items-center gap-4">
                <Review></Review>
                <Review></Review>
                <Review></Review>
                <Review></Review>
            </div>
        </div>
    );
};

export default UserReview;