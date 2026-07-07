import tkinter as tk
from tkinter import ttk, messagebox

class DreamdayDesignersApp(tk.Tk):
    def __init__(self):
        super().__init__()
        self.title("Dreamday Designers - Management System")
        self.geometry("800x600")
        self.configure(bg="#f0f0f0")
        
        # Style
        style = ttk.Style(self)
        try:
            style.theme_use('clam')
        except tk.TclError:
            pass
        
        # Header
        header = tk.Frame(self, bg="#2c3e50", height=80)
        header.pack(fill=tk.X)
        tk.Label(header, text="Dreamday Designers", fg="white", bg="#2c3e50", font=("Helvetica", 24, "bold")).pack(pady=20)
        
        # Notebook for tabs
        notebook = ttk.Notebook(self)
        notebook.pack(expand=True, fill=tk.BOTH, padx=20, pady=20)
        
        # Dashboard Tab
        self.tab_dashboard = tk.Frame(notebook, bg="white")
        notebook.add(self.tab_dashboard, text="Dashboard")
        self.build_dashboard()
        
        # Services Tab
        self.tab_services = tk.Frame(notebook, bg="white")
        notebook.add(self.tab_services, text="Our Services")
        self.build_services()
        
        # New Client Tab
        self.tab_client = tk.Frame(notebook, bg="white")
        notebook.add(self.tab_client, text="New Client")
        self.build_client_form()
        
    def build_dashboard(self):
        tk.Label(self.tab_dashboard, text="Welcome to Dreamday Designers", font=("Helvetica", 18, "bold"), bg="white").pack(pady=30)
        tk.Label(self.tab_dashboard, text="Your premier event and interior design agency.", font=("Helvetica", 12), bg="white").pack()
        
        stats_frame = tk.Frame(self.tab_dashboard, bg="white")
        stats_frame.pack(pady=40)
        
        self.create_stat_card(stats_frame, "Active Projects", "12", 0)
        self.create_stat_card(stats_frame, "Completed Events", "148", 1)
        self.create_stat_card(stats_frame, "Happy Clients", "200+", 2)
        
    def create_stat_card(self, parent, title, value, col):
        card = tk.Frame(parent, bg="#ecf0f1", padx=20, pady=20, relief=tk.RAISED, borderwidth=1)
        card.grid(row=0, column=col, padx=10)
        tk.Label(card, text=value, font=("Helvetica", 24, "bold"), bg="#ecf0f1", fg="#2980b9").pack()
        tk.Label(card, text=title, font=("Helvetica", 10), bg="#ecf0f1").pack()

    def build_services(self):
        tk.Label(self.tab_services, text="Our Services", font=("Helvetica", 16, "bold"), bg="white").pack(pady=20)
        services = [
            ("Wedding Planning", "Full-service wedding planning, from venue selection to day-of coordination."),
            ("Interior Design", "Transforming spaces into beautiful, functional, and personalized environments."),
            ("Corporate Events", "Professional planning for conferences, galas, and corporate retreats."),
            ("Floral Design", "Custom floral arrangements for all occasions.")
        ]
        for title, desc in services:
            frame = tk.Frame(self.tab_services, bg="white")
            frame.pack(fill=tk.X, padx=40, pady=10)
            tk.Label(frame, text=f"• {title}", font=("Helvetica", 12, "bold"), bg="white", fg="#34495e", anchor="w").pack(fill=tk.X)
            tk.Label(frame, text=desc, font=("Helvetica", 10), bg="white", anchor="w").pack(fill=tk.X, padx=15)

    def build_client_form(self):
        tk.Label(self.tab_client, text="Register New Client Inquiry", font=("Helvetica", 16, "bold"), bg="white").pack(pady=20)
        
        form_frame = tk.Frame(self.tab_client, bg="white")
        form_frame.pack(pady=10)
        
        # Name
        tk.Label(form_frame, text="Client Name:", bg="white", font=("Helvetica", 10)).grid(row=0, column=0, sticky="e", pady=5, padx=5)
        self.entry_name = ttk.Entry(form_frame, width=30)
        self.entry_name.grid(row=0, column=1, pady=5, padx=5)
        
        # Email
        tk.Label(form_frame, text="Email Address:", bg="white", font=("Helvetica", 10)).grid(row=1, column=0, sticky="e", pady=5, padx=5)
        self.entry_email = ttk.Entry(form_frame, width=30)
        self.entry_email.grid(row=1, column=1, pady=5, padx=5)
        
        # Service Interest
        tk.Label(form_frame, text="Service Needed:", bg="white", font=("Helvetica", 10)).grid(row=2, column=0, sticky="e", pady=5, padx=5)
        self.combo_service = ttk.Combobox(form_frame, values=["Wedding Planning", "Interior Design", "Corporate Event", "Floral Design"], state="readonly", width=27)
        self.combo_service.grid(row=2, column=1, pady=5, padx=5)
        self.combo_service.current(0)
        
        # Notes
        tk.Label(form_frame, text="Additional Notes:", bg="white", font=("Helvetica", 10)).grid(row=3, column=0, sticky="ne", pady=5, padx=5)
        self.text_notes = tk.Text(form_frame, width=30, height=5)
        self.text_notes.grid(row=3, column=1, pady=5, padx=5)
        
        # Submit Button
        submit_btn = ttk.Button(form_frame, text="Submit Inquiry", command=self.submit_form)
        submit_btn.grid(row=4, column=0, columnspan=2, pady=20)
        
    def submit_form(self):
        name = self.entry_name.get()
        if not name:
            messagebox.showerror("Error", "Client Name is required.")
            return
        messagebox.showinfo("Success", f"Inquiry for {name} registered successfully!")
        self.entry_name.delete(0, tk.END)
        self.entry_email.delete(0, tk.END)
        self.text_notes.delete("1.0", tk.END)
        self.combo_service.current(0)

if __name__ == "__main__":
    app = DreamdayDesignersApp()
    app.mainloop()
