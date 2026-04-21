from bs4 import BeautifulSoup
import json

with open("thrall-promptbook-v2.html", "r") as f:
    html = f.read()

soup = BeautifulSoup(html, "html.parser")
phases = soup.find_all("section", class_="phase")

plan = []
for phase in phases:
    phase_title = phase.find("div", class_="phase-title").text.strip()
    steps = phase.find_all("div", class_="step")
    
    phase_data = {"title": phase_title, "steps": []}
    
    for step in steps:
        snum = step.find("span", class_="snum")
        stitle = step.find("span", class_="stitle")
        tbadge = step.find("span", class_="tbadge")
        
        step_data = {
            "num": snum.text.strip() if snum else "",
            "title": stitle.text.strip() if stitle else "",
            "type": tbadge.text.strip() if tbadge else "",
        }
        
        pb_text = step.find("div", class_="pb-text")
        if pb_text:
            step_data["prompt"] = pb_text.text.strip()
            
        manual_list = step.find("ul", class_="mlist")
        if manual_list:
            items = [li.text.strip() for li in manual_list.find_all("li")]
            step_data["manual_steps"] = items
            
        phase_data["steps"].append(step_data)
        
    plan.append(phase_data)

with open("plan.json", "w") as f:
    json.dump(plan, f, indent=2)

for p in plan:
    print(f"--- Phase {p['title']} ---")
    for s in p["steps"]:
        print(f"[{s['type']}] {s['num']} {s['title']}")
