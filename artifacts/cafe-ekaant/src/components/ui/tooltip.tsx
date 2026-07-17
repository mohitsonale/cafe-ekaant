import * as React from 'react';
import { cn } from '@/lib/utils';

// Lightweight tooltip — no external dependency, no 'use client', no animation CSS.
// API-compatible with the previous @radix-ui/react-tooltip implementation.

interface TooltipContextValue {
  open: boolean;
  setOpen: (v: boolean) => void;
}

const TooltipContext = React.createContext<TooltipContextValue>({
  open: false,
  setOpen: () => {},
});

// ─── Provider ────────────────────────────────────────────────────────────────

interface TooltipProviderProps {
  children: React.ReactNode;
  delayDuration?: number;
}

const TooltipProvider = ({ children }: TooltipProviderProps) => (
  <>{children}</>
);

// ─── Root ─────────────────────────────────────────────────────────────────────

interface TooltipProps {
  children: React.ReactNode;
}

const Tooltip = ({ children }: TooltipProps) => {
  const [open, setOpen] = React.useState(false);
  return (
    <TooltipContext.Provider value={{ open, setOpen }}>
      <div className="relative inline-block">{children}</div>
    </TooltipContext.Provider>
  );
};

// ─── Trigger ──────────────────────────────────────────────────────────────────

interface TooltipTriggerProps {
  children: React.ReactNode;
  asChild?: boolean;
}

const TooltipTrigger = ({ children, asChild }: TooltipTriggerProps) => {
  const { setOpen } = React.useContext(TooltipContext);
  const handlers = {
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false),
    onFocus: () => setOpen(true),
    onBlur: () => setOpen(false),
  };

  if (asChild && React.isValidElement(children)) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return React.cloneElement(children as React.ReactElement<any>, handlers);
  }
  return <span {...handlers}>{children}</span>;
};

// ─── Content ──────────────────────────────────────────────────────────────────

interface TooltipContentProps {
  children?: React.ReactNode;
  className?: string;
  sideOffset?: number;
  side?: 'top' | 'bottom' | 'left' | 'right';
}

const TooltipContent = React.forwardRef<HTMLDivElement, TooltipContentProps>(
  ({ children, className, sideOffset = 4 }, ref) => {
    const { open } = React.useContext(TooltipContext);
    if (!open) return null;
    return (
      <div
        ref={ref}
        role="tooltip"
        style={{ marginBottom: sideOffset }}
        className={cn(
          'absolute bottom-full left-1/2 -translate-x-1/2 z-50',
          'rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground',
          'whitespace-nowrap shadow-md',
          className,
        )}
      >
        {children}
      </div>
    );
  },
);
TooltipContent.displayName = 'TooltipContent';

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
