export default function SlideThree() {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center px-6">
      <p className="mb-6 text-xl">
        Surprise.  
        Here lies a form.  
        Funny, huh?  
        This took me two hours to make.
      </p>

      <form
        action="https://formspree.io/f/mpqwgngb"
        method="POST"
        className="flex flex-col gap-4 w-full max-w-sm"
      >
        <input
          name="movie"
          placeholder="Which movie do you wanna see?"
          className="p-3 rounded text-black"
          required
        />

        <button className="bg-white text-black py-2 rounded">
          Submit
        </button>
      </form>

      <p className="mt-10 text-sm opacity-80">
        Indrayudh Bandyopadhyay will be waiting for you.
      </p>
    </div>
  );
}
