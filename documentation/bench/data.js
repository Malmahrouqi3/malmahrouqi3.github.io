window.BENCHMARK_DATA = {
  "lastUpdate": 1761688559982,
  "repoUrl": "https://github.com/Malmahrouqi3/MFC-mo2",
  "entries": {
    "Continuous Benchmarking (CPU)": [
      {
        "commit": {
          "author": {
            "name": "Mohammed S. Al-Mahrouqi",
            "username": "Malmahrouqi3",
            "email": "145478595+Malmahrouqi3@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e2a8ccc6a426a0575a9fdb8752f1f85913f700f4",
          "message": "Update report.yml to include GPU benchmarking\n\nAdded separate benchmark storage for GPU results.",
          "timestamp": "2025-10-28T21:44:51Z",
          "url": "https://github.com/Malmahrouqi3/MFC-mo2/commit/e2a8ccc6a426a0575a9fdb8752f1f85913f700f4"
        },
        "date": 1761688402289,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "5eq_rk3_weno3_hllc",
            "value": 29275,
            "unit": "s/iter",
            "extra": "iterations: 94877\ncpu: 29275 s\nthreads: 1"
          },
          {
            "name": "hypo_hll",
            "value": 32317,
            "unit": "s/iter",
            "extra": "iterations: 21609\ncpu: 29275 s\nthreads: 1"
          },
          {
            "name": "ibm",
            "value": 32317,
            "unit": "s/iter",
            "extra": "iterations: 21609\ncpu: 29275 s\nthreads: 1"
          },
          {
            "name": "igr",
            "value": 32317,
            "unit": "s/iter",
            "extra": "iterations: 21609\ncpu: 29275 s\nthreads: 1"
          },
          {
            "name": "viscous_weno5_sgb_acoustic",
            "value": 32724,
            "unit": "s/iter",
            "extra": "iterations: 21393\ncpu: 29275 s\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mohammed S. Al-Mahrouqi",
            "username": "Malmahrouqi3",
            "email": "145478595+Malmahrouqi3@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "093adb218db7ff5e50e10bf5616d6a9c434935c9",
          "message": "Add clean step for benchmark data repository\n\nAdd step to clean benchmark data repository directory before storing results.",
          "timestamp": "2025-10-28T21:54:39Z",
          "url": "https://github.com/Malmahrouqi3/MFC-mo2/commit/093adb218db7ff5e50e10bf5616d6a9c434935c9"
        },
        "date": 1761688557903,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "5eq_rk3_weno3_hllc",
            "value": 29275,
            "unit": "s/iter",
            "extra": "iterations: 94877\ncpu: 29275 s\nthreads: 1"
          },
          {
            "name": "hypo_hll",
            "value": 32317,
            "unit": "s/iter",
            "extra": "iterations: 21609\ncpu: 29275 s\nthreads: 1"
          },
          {
            "name": "ibm",
            "value": 32317,
            "unit": "s/iter",
            "extra": "iterations: 21609\ncpu: 29275 s\nthreads: 1"
          },
          {
            "name": "igr",
            "value": 32317,
            "unit": "s/iter",
            "extra": "iterations: 21609\ncpu: 29275 s\nthreads: 1"
          },
          {
            "name": "viscous_weno5_sgb_acoustic",
            "value": 32724,
            "unit": "s/iter",
            "extra": "iterations: 21393\ncpu: 29275 s\nthreads: 1"
          }
        ]
      }
    ]
  }
}