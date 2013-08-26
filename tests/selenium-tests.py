# Test to be run after starting devserver.
# os.system(".././devserver.sh")
# ---------------------------
# $ python selenium-tests.py
# ---------------------------

from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.action_chains import ActionChains
import os


driver = webdriver.Firefox()
driver.get("http://localhost:2600")
assert "Ganeti Cluster Mapping" in driver.title

# Checking if help appears on clicking on a help-div
driver.find_element_by_id('help-div').click();

driver.close()
