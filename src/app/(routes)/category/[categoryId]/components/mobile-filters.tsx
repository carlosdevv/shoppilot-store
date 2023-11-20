"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import IconButton from "@/components/ui/icon-button";
import { Color, Size } from "@/lib/types";
import { Dialog } from "@headlessui/react";
import { useState } from "react";
import Filter from "./filter";

type MobileFiltersProps = {
  sizes: Size[];
  colors: Color[];
};

const MobileFilters = ({ colors, sizes }: MobileFiltersProps) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Button
        className="rounded-full items-center flex gap-x-2 lg:hidden"
        onClick={onOpen}
      >
        Filters
        <Icons.plus size={20} />
      </Button>

      <Dialog
        open={open}
        as="div"
        className="relative z-40 lg:hidden"
        onClose={onClose}
      >
        <div className="fixed inset-0 bg-black bg-opacity-25">
          <div className="fixed inset-0 z-40 flex">
            <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
              <div className="flex items-center justify-end px-4">
                <IconButton onClick={onClose} icon={<Icons.x size={15} />} />
              </div>

              <div className="p-4">
                <Filter valueKey="sizeId" name="Sizes" data={sizes} />
                <Filter valueKey="colorId" name="Colors" data={colors} />
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default MobileFilters;
