# LeadBridgeAI evaluation summary

## Evaluation objective
Measure how reliably the deterministic workflow handles synthetic cross-channel sales inquiries while keeping factual and policy risks controlled.

## Dataset or case structure
The evaluation uses 20 authored synthetic cases covering pricing, availability, variants, delivery, location, negotiation, orders, complaints, spam, prompt injection and related lead-handling situations. The same cases and strict scorer are used for comparison runs.

## Anti-leakage approach
The baseline receives only runnable inputs such as channel, conversation messages, post ID and a generic business description. Expected answers, rationales, prohibited actions, catalogue data, inventory, negotiation limits and hidden policy fields are removed before execution. The tool-assisted workflow accesses only controlled synthetic fixtures through read-only verified tools.

## Metrics used
The primary metric is the correctly handled buying-opportunity rate under an all-applicable-requirements rule. Secondary metrics are intent accuracy, escalation accuracy, factual integrity, policy safety, pass/fail counts and runtime. Results are not collapsed into one overall accuracy score.

## Verified baseline results
The authoritative frozen deterministic baseline report records 4/20 passing cases (20.00%), 60.00% intent accuracy, 60.00% escalation accuracy, 100.00% factual integrity, 100.00% policy safety and 52 ms runtime. The verified-tool comparison records 12/20 passing cases (60.00%), 80.00% intent accuracy, 80.00% escalation accuracy, 100.00% factual integrity, 100.00% policy safety and 39 ms runtime.

## Interpretation
Factual and policy compliance are strengths of both stored evaluated workflows. The baseline's buying-opportunity and intent results show that product association, nuanced intent handling and escalation decisions need improvement. Verified context materially improves the stored comparison, but this remains a synthetic, deterministic evaluation rather than production accuracy.

## Limitations
Twenty cases are not complete production validation. Data is synthetic, channel integrations are not live, results are stored report values rather than fresh reruns, and the evaluation does not establish customer adoption, financial impact or autonomous sales performance.

## Improvement priorities
Improve product association and multi-intent classification, strengthen ambiguous negotiation and order handling, expand representative cases, and validate any future model-assisted path with bounded, explicitly labelled runs.

## Responsible-use requirements
Keep factual and policy claims grounded in verified evidence, preserve traces, escalate ambiguous or consequential cases, and require human approval for every customer-facing response. The prototype must not autonomously negotiate, close sales or send unreviewed messages.