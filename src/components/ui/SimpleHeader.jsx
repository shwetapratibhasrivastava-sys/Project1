import React from 'react';
import { Grid2X2 } from 'lucide-react';
import { Sheet, SheetContent, SheetFooter } from '../ui/Sheet';
import { Button, buttonVariants } from '../ui/Button';
import { MenuToggle } from '../ui/MenuToggle';

export function SimpleHeader() {
	const [open, setOpen] = React.useState(false);

	const links = [
		{ label: 'Home', href: '#' },
		{ label: 'Product', href: '#' },
		{ label: 'Contact', href: '#' },
	];

	return React.createElement('header', { className: "bg-background/9 supports-[backdrop-filter]:bg-background/80 sticky z-50 w-full border-b backdrop-blur-lg" },
		React.createElement('nav', { className: "ml-[200px] flex h-14 w-full max-w-4xl items-center justify-between " },
			// Logo section
			React.createElement('div', { className: "flex items-center gap-2" },
				React.createElement(Grid2X2, { className: "size-6" }),
				React.createElement('p', { className: "font-mono text-lg font-bold" }, "Portfolio")
			),
			// Desktop navigation
			React.createElement('div', { className: "hidden items-center gap-2 lg:flex" },
				...links.map(link => 
					React.createElement('a', {
						className: buttonVariants({ variant: 'ghost' }),
						href: link.href
					}, link.label)
				),
				React.createElement(Button, { variant: "outline" }, "Sign In"),
				React.createElement(Button, null, "Get Started")
			),
			// Mobile navigation
			React.createElement(Sheet, { open: open, onOpenChange: setOpen },
				React.createElement(Button, { size: "icon", variant: "outline", className: "lg:hidden" },
					React.createElement(MenuToggle, {
						strokeWidth: 2.5,
						open: open,
						onOpenChange: setOpen,
						className: "size-6"
					})
				),
				React.createElement(SheetContent, {
					className: "bg-background/95 supports-[backdrop-filter]:bg-background/80 gap-0 backdrop-blur-lg",
					showClose: false,
					side: "left"
				},
					React.createElement('div', { className: "grid gap-y-2 overflow-y-auto px-4 pt-12 pb-5" },
						...links.map(link =>
							React.createElement('a', {
								className: buttonVariants({ variant: 'ghost', className: 'justify-start' }),
								href: link.href
							}, link.label)
						)
					),
					React.createElement(SheetFooter, null,
						React.createElement(Button, { variant: "outline" }, "Sign In"),
						React.createElement(Button, null, "Get Started")
					)
				)
			)
		)
	);
}