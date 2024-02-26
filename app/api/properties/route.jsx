import connectDB from "@/config/databse";

export const GET = async (request) => {
  try {
    await connectDB();
    return new Response(JSON.stringify({ message: "Hello World" }), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Reponse("Something went wrong!", { status: 500 });
  }
};
