import Image from "next/image";

export default function ContactMePage() {

  return (
    <>
      <section className="relative px-20 pt-20 pb-10 overflow-hidden">
        <div className="flex justify-center">
          <h1 className="!text-5xl font-semibold uppercase tracking-wider text-color-change-animation">Contact Me</h1>
        </div>
      </section>

      <section id="contact" className="container mx-auto">
        <div className="grid md:grid-cols-2 my-12 md:my-16 gap-4 relative">
          <div className="z-10">
            <h5 className="text-4xl font-bold text-white my-2">Reach Out to Me</h5>
            <p className="text-[#ADB7BE] mb-4 max-w-md">
              I am a Full-stack Developer with expertise in Frontend development using Angular.
              I&apos;m passionate about building modern, responsive web applications. Whether you&apos;re looking to collaborate on a project, have questions about Angular, or just want to discuss the latest in web development, feel free to reach out.
              I&apos;m always excited to connect with fellow developers and tech enthusiasts!
            </p>
            <div className="socials flex flex-row gap-2">
              <a href="https://github.com/bhushanzade">
                <Image width={50} height={50} src="/images/github-icon.svg" alt="github icon" />
              </a>
              <a href="https://www.linkedin.com/in/bhushanzade/">
                <Image width={50} height={50} src="/images/linkedin-icon.svg" alt="linkedin icon" />
              </a>
            </div>
          </div>
          <div>
            <form
              action="https://formspree.io/f/xwplpbrq"
              method="POST"
            >
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="_replyto"
                  id="email"
                  className="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="test@google.com"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Just saying hi"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Let's talk about..."
                />
              </div>
              <div className="mb-6">
                <button
                  type="submit"
                  className="cursor-pointer bg-rose-500 hover:bg-rose-700 text-white font-medium py-2.5 px-5 rounded-lg w-full"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}