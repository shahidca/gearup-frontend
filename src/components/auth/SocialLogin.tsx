"use client";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function SocialLogin() {
      return (
            <div className="space-y-6">
                  <div className="flex items-center gap-4">
                        <Separator className="flex-1" />

                        <span className="text-sm text-muted-foreground">
                              or continue with
                        </span>

                        <Separator className="flex-1" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                        <Button
                              type="button"
                              variant="outline"
                              className="h-12"
                        >
                              <FcGoogle className="mr-2 h-5 w-5" />
                              Google
                        </Button>

                        <Button
                              type="button"
                              variant="outline"
                              className="h-12"
                        >
                              <FaGithub className="mr-2 h-5 w-5" />
                              GitHub
                        </Button>
                  </div>
            </div>
      );
}