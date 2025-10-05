"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Download } from "lucide-react";
import Image from "next/image";
import { HTMLAttributes } from "react";
import { GithubLogo } from "./icons";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { Zap } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { X } from "lucide-react";

const About = () => {
  const [showCVViewer, setShowCVViewer] = useState(false);
  return (
    <div className="relative min-h-screen flex items-center justify-center px-3 pt-3">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 h-full skew-y-12"
        )}
      />
      <div className="relative z-[1] text-center max-w-screen-md">
        <section id="about" className="relative py-20 px-6">
          <div className="max-w-screen-md mx-auto">
            <div className="flex flex-col md:flex-row-reverse gap-12">
              <ProfileImage className="hidden md:block" />

              {/* Content */}
              <div className="flex-1 md:text-left mt-8">
                <ProfileImage className="mt-3 mb-8 block md:hidden" />
                <h2 className="text-4xl font-bold mb-2 tracking-tight">
                  Kent Francis E. Kalaw
                </h2>
                <p className="mb-2 text-lg">
                  Bachelor of Science in Information Technology
                </p>
                <Badge className="rounded-full mb-3 border-none">
                  <Zap className="fill-current" />
                  Fullstack Web Developer
                </Badge>
                <p className="text-muted-foreground mb-3 text-justify">
                  A fresh graduate with a passion for web development. Skilled
                  in both front-end and back-end technologies. I enjoy creating
                  challenging, seamless and engaging web experiences.
                </p>
                <p className="text-muted-foreground mb-3 text-justify">
                  Start connecting with me and let's build something amazing
                  together!
                </p>
                <div className="flex flex-wrap gap-4 justify-start">
                  <Button className="rounded-full" asChild>
                    <a
                      href="https://github.com/KentKalaw"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GithubLogo />
                      View My Github
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-full bg-transparent"
                    onClick={() => setShowCVViewer(true)}
                  >
                    <Download />
                    View CV
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <CVViewerDialog open={showCVViewer} onOpenChange={setShowCVViewer} />
    </div>
  );
};

const ProfileImage = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("flex mt-10 items-center justify-center md:block", className)}
    {...props}
  >
    <div className="relative w-48 h-48 md:w-72 md:h-72 rounded-2xl overflow-hidden bg-accent mx-auto">
      <Image
        src="/kentkalaw-pic-v2.jpeg"
        alt=""
        className="object-cover"
        fill
      />
    </div>
  </div>
);

interface CVViewerDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CVViewerDialog = ({ open, onOpenChange }: CVViewerDialogProps) => {
  const cvPath = "/Kent-Kalaw-Resume.pdf";

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = cvPath;
    link.download = "Kent-Francis-Kalaw-CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[95vw] w-full h-[95vh] md:max-w-4xl md:h-[90vh] p-0 flex flex-col [&>button]:hidden">
        <DialogHeader className="px-6 py-4 border-b border-border shrink-0">
          <div className="flex items-center justify-between gap-4">
            <DialogTitle className="text-sm md:text-lg font-semibold">
              Kent Francis E. Kalaw - CV
            </DialogTitle>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleDownload}
                className="rounded-full bg-transparent"
              >
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
              <DialogClose asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full"
                >
                  <X className="h-4 w-4" />
                  <span className="sr-only">Close</span>
                </Button>
              </DialogClose>
            </div>
          </div>
        </DialogHeader>
        <div className="flex-1 min-h-0 overflow-hidden">
          <iframe
            src={cvPath}
            className="w-full h-full border-0"
            title="CV Preview"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default About;
