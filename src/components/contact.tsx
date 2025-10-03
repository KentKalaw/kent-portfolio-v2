import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Contact = () => {
  return (
    <section id="contact" className="relative py-20 px-6">
      <div className="max-w-screen-md flex mx-auto">
        <div className="w-full justify-center space-y-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Contact Me
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Get In Touch
            </h2>
            <p className="text-muted-foreground text-justify mt-2 sm:mt-4 text-lg">
              I'm currently open to new opportunities and collaborations.
              Whether you have a question, a project idea, or just want to say
              hello, feel free to reach out. I look forward to connecting with
              you!
            </p>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Enter your email" type="email" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                placeholder="Enter the subject of your message"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Enter your message"
                className="min-h-[100px]"
              />
            </div>
            <Button>Send message</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
